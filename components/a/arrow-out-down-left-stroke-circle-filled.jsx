import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yerncn7yx.css';
import '../../css/i/i-33urxjf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yerncn7yx"/><path class="i-33urxjf"/>`,
		"fallback": "boxicons:arrow-out-down-left-stroke-circle-filled",
	});
}

export default Component;
