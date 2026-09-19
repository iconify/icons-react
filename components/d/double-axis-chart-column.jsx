import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mfjgc5bzj.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mfjgc5bzj"/>`,
		"fallback": "carbon:double-axis-chart-column",
	});
}

export default Component;
