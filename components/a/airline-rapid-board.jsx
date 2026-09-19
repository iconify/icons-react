import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vi_4_2dxt.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vi_4_2dxt"/>`,
		"fallback": "carbon:airline-rapid-board",
	});
}

export default Component;
