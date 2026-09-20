import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tzk0y1b8u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tzk0y1b8u"/>`,
		"fallback": "keyline-icons:bell-minus",
	});
}

export default Component;
