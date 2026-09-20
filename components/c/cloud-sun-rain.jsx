import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/ktja0bbwx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ktja0bbwx"/>`,
		"fallback": "lucide:cloud-sun-rain",
	});
}

export default Component;
