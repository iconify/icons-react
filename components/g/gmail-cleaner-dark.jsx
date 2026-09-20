import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/in40wib8n.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="in40wib8n"/>`,
		"fallback": "selfhst:gmail-cleaner-dark",
	});
}

export default Component;
