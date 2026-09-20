import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nj0h3714z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nj0h3714z"/>`,
		"fallback": "ri:area-chart-line",
	});
}

export default Component;
