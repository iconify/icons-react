import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dacf7bcvi.css';
import '../../css/p/poyb6lb_l.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dacf7bcvi"/><path class="poyb6lb_l"/>`,
		"fallback": "energy-icons:clamp-meter-48-bold",
	});
}

export default Component;
