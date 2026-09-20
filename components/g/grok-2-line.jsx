import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f7mqf2bqi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f7mqf2bqi"/>`,
		"fallback": "mingcute:grok-2-line",
	});
}

export default Component;
