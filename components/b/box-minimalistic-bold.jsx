import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fg0oqp0gx.css';
import '../../css/g/gz_xjvbwh.css';
import '../../css/k/ke47qybaf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fg0oqp0gx"/><path class="gz_xjvbwh"/><path class="ke47qybaf"/>`,
		"fallback": "solar:box-minimalistic-bold",
	});
}

export default Component;
