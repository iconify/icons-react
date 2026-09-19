import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/noad8bc2x.css';
import '../../css/v/vbgzj3b-x.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="noad8bc2x"/><path class="vbgzj3b-x"/>`,
		"fallback": "cil:find-in-page",
	});
}

export default Component;
