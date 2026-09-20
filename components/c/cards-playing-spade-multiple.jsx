import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b62x9aczy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b62x9aczy"/>`,
		"fallback": "mdi:cards-playing-spade-multiple",
	});
}

export default Component;
