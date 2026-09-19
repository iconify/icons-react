import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/ja5en4bjg.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ja5en4bjg"/>`,
		"fallback": "game-icons:black-flag",
	});
}

export default Component;
