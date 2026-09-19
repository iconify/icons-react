import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t691w9ufv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="t691w9ufv"/>`,
		"fallback": "griddy-icons:chrome-cast",
	});
}

export default Component;
