import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zn5_h39-u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zn5_h39-u"/>`,
		"fallback": "thesvg-color:distrobox",
	});
}

export default Component;
