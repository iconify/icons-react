import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ue0vf3bog.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ue0vf3bog"/>`,
		"fallback": "game-icons:angel-wings",
	});
}

export default Component;
