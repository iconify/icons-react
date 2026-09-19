import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i002w5bqs.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i002w5bqs"/>`,
		"fallback": "game-icons:fish-eggs",
	});
}

export default Component;
