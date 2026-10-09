import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/ty8a93bmr.css';
import '../../css/r/rzu6pacwb.css';
import '../../css/p/pvt3vvkbj.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ty8a93bmr"/><path class="rzu6pacwb"/><path class="pvt3vvkbj"/>`,
		"fallback": "energy-icons:cable-lay-vessel-48-bold",
	});
}

export default Component;
