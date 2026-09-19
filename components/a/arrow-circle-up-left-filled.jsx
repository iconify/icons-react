import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pe49jsfsz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pe49jsfsz"/>`,
		"fallback": "griddy-icons:arrow-circle-up-left-filled",
	});
}

export default Component;
