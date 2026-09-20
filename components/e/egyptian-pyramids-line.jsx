import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gimaec7ca.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gimaec7ca"/>`,
		"fallback": "mingcute:egyptian-pyramids-line",
	});
}

export default Component;
