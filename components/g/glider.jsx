import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mj9nv3q3m.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mj9nv3q3m"/>`,
		"fallback": "game-icons:glider",
	});
}

export default Component;
