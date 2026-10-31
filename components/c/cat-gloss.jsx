import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i31cdc05h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i31cdc05h"/>`,
		"fallback": "withicons:cat-gloss",
	});
}

export default Component;
