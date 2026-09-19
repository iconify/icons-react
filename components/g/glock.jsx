import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mmbr0-b_b.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mmbr0-b_b"/>`,
		"fallback": "game-icons:glock",
	});
}

export default Component;
