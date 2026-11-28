import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uqg7xdbgi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uqg7xdbgi"/>`,
		"fallback": "noviair-light:donut-chart",
	});
}

export default Component;
