import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/op-6zfyqj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="op-6zfyqj"/>`,
		"fallback": "iconaut:corner-notch-duo",
	});
}

export default Component;
