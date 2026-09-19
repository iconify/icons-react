import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i-33urxjf.css';
import '../../css/y/ysrry-bqw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i-33urxjf"/><path class="ysrry-bqw"/>`,
		"fallback": "boxicons:arrow-out-down-left-stroke-circle",
	});
}

export default Component;
