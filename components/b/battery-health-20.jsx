import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w5fpfqrkj.css';
import '../../css/g/gg61wfd5d.css';
import '../../css/s/s87v5e1do.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w5fpfqrkj"/><path class="gg61wfd5d"/><path class="s87v5e1do"/>`,
		"fallback": "energy-icons:battery-health-20",
	});
}

export default Component;
