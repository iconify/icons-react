import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vmlcj5izr.css';
import '../../css/q/qkmo0ac8b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vmlcj5izr"/><path clip-rule="evenodd" class="qkmo0ac8b"/>`,
		"fallback": "solar:folder-open-bold",
	});
}

export default Component;
