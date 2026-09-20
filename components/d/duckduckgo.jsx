import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vqziu2b3b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vqziu2b3b"/>`,
		"fallback": "thesvg:duckduckgo",
	});
}

export default Component;
