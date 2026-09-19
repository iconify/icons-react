import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hdym82bfb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hdym82bfb"/>`,
		"fallback": "griddy-icons:column-plus-filled",
	});
}

export default Component;
