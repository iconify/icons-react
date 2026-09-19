import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/idyvqg0mc.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="idyvqg0mc"/>`,
		"fallback": "game-icons:gold-scarab",
	});
}

export default Component;
