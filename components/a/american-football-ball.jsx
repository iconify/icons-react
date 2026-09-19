import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/htd5qgbdq.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="htd5qgbdq"/>`,
		"fallback": "game-icons:american-football-ball",
	});
}

export default Component;
