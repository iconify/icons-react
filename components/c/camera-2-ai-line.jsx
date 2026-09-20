import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dl5xgp-7s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dl5xgp-7s"/>`,
		"fallback": "mingcute:camera-2-ai-line",
	});
}

export default Component;
