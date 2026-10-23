import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dj3d1zxsa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dj3d1zxsa"/>`,
		"fallback": "vadivam:blender",
	});
}

export default Component;
