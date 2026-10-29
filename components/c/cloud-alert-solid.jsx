import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/utfj6q1tk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="utfj6q1tk"/>`,
		"fallback": "withicons:cloud-alert-solid",
	});
}

export default Component;
