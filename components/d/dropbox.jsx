import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yihsm4bpy.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yihsm4bpy"/>`,
		"fallback": "cib:dropbox",
	});
}

export default Component;
