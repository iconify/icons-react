import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fcpug3b7d.css';
import '../../css/o/oi41y_wwj.css';
import '../../css/r/rfmo84bve.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fcpug3b7d"/><path class="oi41y_wwj"/><path class="rfmo84bve"/>`,
		"fallback": "fxemoji:chartdownwardstrend",
	});
}

export default Component;
