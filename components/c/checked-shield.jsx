import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mdr_rfb9m.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mdr_rfb9m"/>`,
		"fallback": "game-icons:checked-shield",
	});
}

export default Component;
