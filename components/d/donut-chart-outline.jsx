import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/ma1xzssnw.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ma1xzssnw"/>`,
		"fallback": "teenyicons:donut-chart-outline",
	});
}

export default Component;
