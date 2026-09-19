import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ol0yy7b-d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ol0yy7b-d"/>`,
		"fallback": "griddy-icons:coins-filled",
	});
}

export default Component;
