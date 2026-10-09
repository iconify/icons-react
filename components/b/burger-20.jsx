import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gav8xkmpk.css';
import '../../css/s/sux_alb4i.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gav8xkmpk"/><path class="sux_alb4i"/>`,
		"fallback": "energy-icons:burger-20",
	});
}

export default Component;
