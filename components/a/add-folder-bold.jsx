import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/suo4c_bzl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="suo4c_bzl"/>`,
		"fallback": "solar:add-folder-bold",
	});
}

export default Component;
