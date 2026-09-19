import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/ri_0_bfkj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ri_0_bfkj"/>`,
		"fallback": "griddy-icons:hexagon-alt",
	});
}

export default Component;
