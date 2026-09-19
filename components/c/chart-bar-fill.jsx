import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fy9eo2bfp.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fy9eo2bfp"/>`,
		"fallback": "f7:chart-bar-fill",
	});
}

export default Component;
