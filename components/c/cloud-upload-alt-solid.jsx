import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g_1h_uu6k.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g_1h_uu6k"/>`,
		"fallback": "la:cloud-upload-alt-solid",
	});
}

export default Component;
