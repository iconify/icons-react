import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/km2fl-ght.css';
import '../../css/n/n_71w1bge.css';
import '../../css/x/x_cc1-j5s.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="km2fl-ght"/><path class="n_71w1bge"/><path class="x_cc1-j5s"/>`,
		"fallback": "energy-icons:chart-area-stacked-20",
	});
}

export default Component;
