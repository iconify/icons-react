import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h01tyzbfu.css';
import '../../css/a/awfw_5bbu.css';
import '../../css/q/q4z7accis.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="h01tyzbfu"><path class="awfw_5bbu"/><path class="q4z7accis"/></g>`,
		"fallback": "teenyicons:heart-circle-outline",
	});
}

export default Component;
