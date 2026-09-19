import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uob0f-byp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uob0f-byp"/>`,
		"fallback": "eva:edit-outline",
	});
}

export default Component;
