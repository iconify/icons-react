import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/ppe2xcb_m.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ppe2xcb_m"/>`,
		"fallback": "fluent-mdl2:bulleted-list-text-mirrored",
	});
}

export default Component;
