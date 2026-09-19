import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m0j0zhb7c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="m0j0zhb7c"/>`,
		"fallback": "griddy-icons:chart-pie-filled",
	});
}

export default Component;
