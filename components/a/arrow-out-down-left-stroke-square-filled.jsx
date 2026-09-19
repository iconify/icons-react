import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i-33urxjf.css';
import '../../css/v/v0dunlvta.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i-33urxjf"/><path class="v0dunlvta"/>`,
		"fallback": "boxicons:arrow-out-down-left-stroke-square-filled",
	});
}

export default Component;
