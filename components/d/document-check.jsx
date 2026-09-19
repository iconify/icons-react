import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x12oh9b_m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x12oh9b_m"/>`,
		"fallback": "heroicons-outline:document-check",
	});
}

export default Component;
