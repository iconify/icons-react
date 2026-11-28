import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fk2y3hezu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fk2y3hezu"/>`,
		"fallback": "noviair:donut-chart-search",
	});
}

export default Component;
