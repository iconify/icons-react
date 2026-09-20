import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vlz05eb3r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vlz05eb3r"/>`,
		"fallback": "mdi:content-save-minus-outline",
	});
}

export default Component;
