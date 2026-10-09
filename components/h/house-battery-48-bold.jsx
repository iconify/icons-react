import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uxvnz_b5x.css';
import '../../css/w/wieobab6h.css';
import '../../css/q/q24djubzr.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uxvnz_b5x"/><path class="wieobab6h"/><path class="q24djubzr"/>`,
		"fallback": "energy-icons:house-battery-48-bold",
	});
}

export default Component;
