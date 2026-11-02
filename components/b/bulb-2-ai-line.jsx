import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cd_m56bka.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cd_m56bka"/>`,
		"fallback": "mingcute:bulb-2-ai-line",
	});
}

export default Component;
