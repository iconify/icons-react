import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wv1e5xb_m.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="wv1e5xb_m"/>`,
		"fallback": "pepicons-pencil:heart-filled",
	});
}

export default Component;
