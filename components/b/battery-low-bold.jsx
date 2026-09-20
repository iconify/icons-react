import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m20ppcu0i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="m20ppcu0i"/>`,
		"fallback": "solar:battery-low-bold",
	});
}

export default Component;
