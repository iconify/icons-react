import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zc5-o5lsl.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zc5-o5lsl"/>`,
		"fallback": "garden:growth-chart-fill-16",
	});
}

export default Component;
