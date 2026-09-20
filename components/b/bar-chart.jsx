import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/re-st0z3d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="re-st0z3d"/>`,
		"fallback": "keyline-icons:bar-chart",
	});
}

export default Component;
