import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h5_l9__yf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="h5_l9__yf"/>`,
		"fallback": "griddy-icons:flip-vertical-alt",
	});
}

export default Component;
