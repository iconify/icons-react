import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/ty6or5guf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ty6or5guf"/>`,
		"fallback": "mingcute:battery-plus-line",
	});
}

export default Component;
