import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/ptdi0ebah.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ptdi0ebah"/>`,
		"fallback": "game-icons:biplane",
	});
}

export default Component;
