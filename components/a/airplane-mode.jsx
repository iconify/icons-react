import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wq5ecs8zq.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wq5ecs8zq"/>`,
		"fallback": "cil:airplane-mode",
	});
}

export default Component;
