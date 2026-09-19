import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ikj4i246g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ikj4i246g"/>`,
		"fallback": "griddy-icons:halloween-coffin",
	});
}

export default Component;
