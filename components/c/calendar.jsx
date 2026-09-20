import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/ke399mbnc.css';
import '../../css/f/fpxrp_bmb.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ke399mbnc"/><path class="fpxrp_bmb"/>`,
		"fallback": "ooui:calendar",
	});
}

export default Component;
