import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rooztziwu.css';

const viewBox = {"width":2048,"height":1536};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rooztziwu"/>`,
		"fallback": "fa:bar-chart-o",
	});
}

export default Component;
