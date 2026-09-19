import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t1_bgdc2i.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t1_bgdc2i"/>`,
		"fallback": "carbon:double-axis-chart-bar",
	});
}

export default Component;
