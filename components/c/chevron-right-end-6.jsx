import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w-6j3fb_z.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w-6j3fb_z"/>`,
		"fallback": "fluent-mdl2:chevron-right-end-6",
	});
}

export default Component;
