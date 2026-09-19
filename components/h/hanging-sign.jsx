import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/te4ap0b-d.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="te4ap0b-d"/>`,
		"fallback": "game-icons:hanging-sign",
	});
}

export default Component;
