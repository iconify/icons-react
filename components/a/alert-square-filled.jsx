import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ep8q4pb1g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ep8q4pb1g"/>`,
		"fallback": "griddy-icons:alert-square-filled",
	});
}

export default Component;
