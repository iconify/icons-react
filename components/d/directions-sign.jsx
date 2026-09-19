import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wgfnc9rkf.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wgfnc9rkf"/>`,
		"fallback": "dinkie-icons:directions-sign",
	});
}

export default Component;
