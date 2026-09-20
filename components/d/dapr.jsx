import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kwgshwb8o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kwgshwb8o"/>`,
		"fallback": "simple-icons:dapr",
	});
}

export default Component;
