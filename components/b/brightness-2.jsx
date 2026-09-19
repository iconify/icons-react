import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t6re6s5_j.css';

const viewBox = {"width":320,"height":432};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t6re6s5_j"/>`,
		"fallback": "zmdi:brightness-2",
	});
}

export default Component;
