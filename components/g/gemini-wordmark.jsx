import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p6kasu72k.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p6kasu72k"/>`,
		"fallback": "devicon-plain:gemini-wordmark",
	});
}

export default Component;
