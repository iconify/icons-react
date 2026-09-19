import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yk474ubpr.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yk474ubpr"/>`,
		"fallback": "fa7-solid:chart-column",
	});
}

export default Component;
