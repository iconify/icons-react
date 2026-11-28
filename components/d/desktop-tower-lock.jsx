import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/um1e_otjl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="um1e_otjl"/>`,
		"fallback": "noviair:desktop-tower-lock",
	});
}

export default Component;
