import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f-pmg79_r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f-pmg79_r"/>`,
		"fallback": "griddy-icons:filter",
	});
}

export default Component;
