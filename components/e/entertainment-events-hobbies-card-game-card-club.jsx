import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d5_03acjz.css';
import '../../css/a/af92m0fzs.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d5_03acjz"/><path class="af92m0fzs"/>`,
		"fallback": "streamline-pixel:entertainment-events-hobbies-card-game-card-club",
	});
}

export default Component;
