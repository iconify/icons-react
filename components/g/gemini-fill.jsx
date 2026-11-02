import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nl0wk2bre.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nl0wk2bre"/>`,
		"fallback": "mingcute:gemini-fill",
	});
}

export default Component;
