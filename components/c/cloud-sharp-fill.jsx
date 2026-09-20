import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rthyrpbjr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rthyrpbjr"/>`,
		"fallback": "keyline-icons:cloud-sharp-fill",
	});
}

export default Component;
