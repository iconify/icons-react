import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qu-0ao1so.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="qu-0ao1so"/>`,
		"fallback": "lets-icons:battery-low-fill",
	});
}

export default Component;
