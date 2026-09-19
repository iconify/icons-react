import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g7-_amwkn.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g7-_amwkn"/>`,
		"fallback": "game-icons:face-to-face",
	});
}

export default Component;
