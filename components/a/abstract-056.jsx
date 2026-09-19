import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kw684x6og.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kw684x6og"/>`,
		"fallback": "game-icons:abstract-056",
	});
}

export default Component;
