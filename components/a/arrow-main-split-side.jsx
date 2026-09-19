import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t05-ilkfz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t05-ilkfz"/>`,
		"fallback": "humbleicons:arrow-main-split-side",
	});
}

export default Component;
