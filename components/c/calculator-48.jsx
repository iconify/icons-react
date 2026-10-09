import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k6wl1rbzv.css';
import '../../css/p/p5fo1bbqi.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k6wl1rbzv"/><path class="p5fo1bbqi"/>`,
		"fallback": "energy-icons:calculator-48",
	});
}

export default Component;
