import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/opvy2zb4r.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="opvy2zb4r"/>`,
		"fallback": "dinkie-icons:balloon-filled",
	});
}

export default Component;
