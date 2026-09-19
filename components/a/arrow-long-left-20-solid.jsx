import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h5z5j8bpy.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="h5z5j8bpy"/>`,
		"fallback": "heroicons:arrow-long-left-20-solid",
	});
}

export default Component;
