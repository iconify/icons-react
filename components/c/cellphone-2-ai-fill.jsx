import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rl5qrebcq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rl5qrebcq"/>`,
		"fallback": "mingcute:cellphone-2-ai-fill",
	});
}

export default Component;
