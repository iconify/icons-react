import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fj1o8w1sa.css';
import '../../css/h/hihrgrzxl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fj1o8w1sa"/><path class="hihrgrzxl"/>`,
		"fallback": "lucide-extended:cloud-rain-filled",
	});
}

export default Component;
