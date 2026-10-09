import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dj2y6_b-x.css';
import '../../css/b/bew7-otna.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dj2y6_b-x"/><path class="bew7-otna"/>`,
		"fallback": "energy-icons:carbon-budget-48",
	});
}

export default Component;
