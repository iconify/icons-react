import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/asbux8b8h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="asbux8b8h"/>`,
		"fallback": "withicons:arrow-left-gloss",
	});
}

export default Component;
