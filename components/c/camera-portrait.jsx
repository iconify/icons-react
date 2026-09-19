import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l1u6ybcci.css';
import '../../css/g/gtmkv731h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l1u6ybcci"/><path class="gtmkv731h"/>`,
		"fallback": "boxicons:camera-portrait",
	});
}

export default Component;
