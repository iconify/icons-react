import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g2thj4bkx.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g2thj4bkx"/>`,
		"fallback": "game-icons:doctor-face",
	});
}

export default Component;
