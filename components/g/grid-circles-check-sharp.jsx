import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b0_11wbtm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b0_11wbtm"/>`,
		"fallback": "keyline-icons:grid-circles-check-sharp",
	});
}

export default Component;
