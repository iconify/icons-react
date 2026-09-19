import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y_uny6b8v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y_uny6b8v"/>`,
		"fallback": "boxicons:horizontal-align-center-filled",
	});
}

export default Component;
