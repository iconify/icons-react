import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aaxx29_vr.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aaxx29_vr"/>`,
		"fallback": "game-icons:curling-vines",
	});
}

export default Component;
