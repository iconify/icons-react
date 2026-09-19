import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/icoh9qblg.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="icoh9qblg"/>`,
		"fallback": "game-icons:fire-shield",
	});
}

export default Component;
