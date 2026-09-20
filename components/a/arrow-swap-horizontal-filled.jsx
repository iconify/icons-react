import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/anmx89xew.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="anmx89xew"/>`,
		"fallback": "reicon:arrow-swap-horizontal-filled",
	});
}

export default Component;
