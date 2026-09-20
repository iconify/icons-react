import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zoph2sbiw.css';

const viewBox = {"width":11,"height":11};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zoph2sbiw"/>`,
		"fallback": "maki:cemetery-jp-11",
	});
}

export default Component;
