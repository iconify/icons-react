import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pntg1acwg.css';
import '../../css/p/pu7nh0bwl.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pntg1acwg"/><path class="pu7nh0bwl"/>`,
		"fallback": "energy-icons:heat-battery-48",
	});
}

export default Component;
