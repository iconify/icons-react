import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dp18qwbqf.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dp18qwbqf"/>`,
		"fallback": "lsicon:area-chart-outline",
	});
}

export default Component;
