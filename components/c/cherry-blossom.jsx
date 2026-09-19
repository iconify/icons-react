import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w29npqbft.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w29npqbft"/>`,
		"fallback": "fluent-emoji-high-contrast:cherry-blossom",
	});
}

export default Component;
