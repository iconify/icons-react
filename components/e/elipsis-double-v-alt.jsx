import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c8nu23brh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c8nu23brh"/>`,
		"fallback": "uil:elipsis-double-v-alt",
	});
}

export default Component;
