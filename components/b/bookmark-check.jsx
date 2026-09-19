import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zioed6fcj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="zioed6fcj"/>`,
		"fallback": "griddy-icons:bookmark-check",
	});
}

export default Component;
