import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hugsjk8ob.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hugsjk8ob primary"/>`,
		"fallback": "iconaut:ease-out-duotone",
	});
}

export default Component;
