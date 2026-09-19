import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mju1_f0cp.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mju1_f0cp"/>`,
		"fallback": "game-icons:hand-truck",
	});
}

export default Component;
