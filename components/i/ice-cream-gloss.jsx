import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dwp9_9bow.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dwp9_9bow"/>`,
		"fallback": "withicons:ice-cream-gloss",
	});
}

export default Component;
