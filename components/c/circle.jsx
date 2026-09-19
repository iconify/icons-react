import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mymf28j0p.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mymf28j0p"/>`,
		"fallback": "game-icons:circle",
	});
}

export default Component;
