import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q8wzu_1ay.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q8wzu_1ay"/>`,
		"fallback": "withicons:alert-triangle-gloss",
	});
}

export default Component;
