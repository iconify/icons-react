import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ey3bs5pmj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ey3bs5pmj"/>`,
		"fallback": "keyline-icons:circle-chevron-down-sharp-fill",
	});
}

export default Component;
