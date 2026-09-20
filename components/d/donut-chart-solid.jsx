import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/ghei44brf.css';
import '../../css/y/ygr7rgb1k.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ghei44brf"/><path class="ygr7rgb1k"/>`,
		"fallback": "teenyicons:donut-chart-solid",
	});
}

export default Component;
