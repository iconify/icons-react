import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c29l7mb9d.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c29l7mb9d"/>`,
		"fallback": "teenyicons:gantt-chart-outline",
	});
}

export default Component;
