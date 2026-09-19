import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h_nb4-z7t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h_nb4-z7t"/>`,
		"fallback": "boxicons:clock-1-filled",
	});
}

export default Component;
