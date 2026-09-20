import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hahi55pcj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hahi55pcj"/>`,
		"fallback": "mdi:folder-swap-outline",
	});
}

export default Component;
