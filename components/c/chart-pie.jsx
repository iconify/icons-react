import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d8goq-vxy.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d8goq-vxy"/>`,
		"fallback": "f7:chart-pie",
	});
}

export default Component;
