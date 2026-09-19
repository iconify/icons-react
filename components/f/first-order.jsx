import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/an3sm_xkv.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="an3sm_xkv"/>`,
		"fallback": "fa7-brands:first-order",
	});
}

export default Component;
