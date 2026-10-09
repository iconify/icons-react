import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hqlynnpbk.css';
import '../../css/l/l314gk7pp.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hqlynnpbk"/><path class="l314gk7pp"/>`,
		"fallback": "energy-icons:flow-battery-20-bold",
	});
}

export default Component;
