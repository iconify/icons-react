import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ax1am94cr.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ax1am94cr"/>`,
		"fallback": "cil:bookmark",
	});
}

export default Component;
