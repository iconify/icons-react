import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sk5nc2iou.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sk5nc2iou"/>`,
		"fallback": "carbon:collaborate",
	});
}

export default Component;
