import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f-zbgc76c.css';
import '../../css/n/ny48sabtr.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f-zbgc76c"/><path class="ny48sabtr"/>`,
		"fallback": "energy-icons:dashboard-48",
	});
}

export default Component;
