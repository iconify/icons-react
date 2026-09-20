import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v51z47b0w.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v51z47b0w"/>`,
		"fallback": "selfhst:codeproject-ai-server-dark",
	});
}

export default Component;
