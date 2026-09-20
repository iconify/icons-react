import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ynyh7db1r.css';
import '../../css/t/th8xxac7d.css';

const viewBox = {"width":11,"height":11};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ynyh7db1r"/><path class="th8xxac7d"/>`,
		"fallback": "maki:bank-11",
	});
}

export default Component;
