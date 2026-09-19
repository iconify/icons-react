import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/weh0b5bcz.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="weh0b5bcz"/>`,
		"fallback": "game-icons:incense",
	});
}

export default Component;
