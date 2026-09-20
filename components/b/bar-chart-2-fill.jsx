import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bb6b0ugaj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bb6b0ugaj"/>`,
		"fallback": "ri:bar-chart-2-fill",
	});
}

export default Component;
