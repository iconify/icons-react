import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qqccm1buv.css';
import '../../css/h/hw4m2zm2k.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qqccm1buv"/><path class="hw4m2zm2k"/>`,
		"fallback": "cil:fridge",
	});
}

export default Component;
