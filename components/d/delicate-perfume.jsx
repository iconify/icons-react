import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wtw8lr04q.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wtw8lr04q"/>`,
		"fallback": "game-icons:delicate-perfume",
	});
}

export default Component;
