import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sxl5jackx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="sxl5jackx"/>`,
		"fallback": "keyline-icons:grid-2x2-fill",
	});
}

export default Component;
