import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y2v-wj12u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y2v-wj12u"/>`,
		"fallback": "lucide:chart-bar-decreasing",
	});
}

export default Component;
