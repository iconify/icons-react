import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lu-74desw.css';
import '../../css/t/ty2vo4ljz.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lu-74desw"/><path class="ty2vo4ljz"/>`,
		"fallback": "cil:football",
	});
}

export default Component;
