import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cu4jmcblb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cu4jmcblb"/>`,
		"fallback": "boxicons:briefcase-alt-filled",
	});
}

export default Component;
