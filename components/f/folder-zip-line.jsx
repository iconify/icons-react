import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h8jxx8lwj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h8jxx8lwj"/>`,
		"fallback": "mingcute:folder-zip-line",
	});
}

export default Component;
