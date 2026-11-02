import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipu02zq8h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ipu02zq8h"/>`,
		"fallback": "mingcute:classify-3-ai-fill",
	});
}

export default Component;
