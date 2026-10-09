import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q_7is9beq.css';
import '../../css/s/sk8h-pxpn.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q_7is9beq"/><path class="sk8h-pxpn"/>`,
		"fallback": "energy-icons:corner-down-left-20",
	});
}

export default Component;
