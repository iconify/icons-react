import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hc00d4ghi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="hc00d4ghi"/>`,
		"fallback": "solar:camera-rotate-bold",
	});
}

export default Component;
