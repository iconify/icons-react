import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pwjh3lyto.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pwjh3lyto"/>`,
		"fallback": "game-icons:biohazard",
	});
}

export default Component;
