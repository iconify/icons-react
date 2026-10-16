import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tv5yvyzmk.css';
import '../../css/y/y6o6t-piu.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tv5yvyzmk"/><path class="y6o6t-piu"/>`,
		"fallback": "energy-icons:ethernet-port-20",
	});
}

export default Component;
