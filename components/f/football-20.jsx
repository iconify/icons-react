import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yw3xaacjo.css';
import '../../css/h/hpn133b5h.css';
import '../../css/v/vdaja94zh.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yw3xaacjo"/><path class="hpn133b5h"/><path class="vdaja94zh"/>`,
		"fallback": "energy-icons:football-20",
	});
}

export default Component;
