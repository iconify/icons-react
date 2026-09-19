import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v8d4h96vo.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v8d4h96vo"/>`,
		"fallback": "game-icons:halberd",
	});
}

export default Component;
