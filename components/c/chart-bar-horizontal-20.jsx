import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o3ivimbut.css';
import '../../css/n/ne1liqbjc.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o3ivimbut"/><path class="ne1liqbjc"/>`,
		"fallback": "energy-icons:chart-bar-horizontal-20",
	});
}

export default Component;
