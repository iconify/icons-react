import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t6i2682uu.css';
import '../../css/x/xai0083ma.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t6i2682uu"/><path class="xai0083ma"/>`,
		"fallback": "streamline-pixel:entertainment-events-hobbies-board-game-dice",
	});
}

export default Component;
