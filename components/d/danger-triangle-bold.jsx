import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gyslreb9e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="gyslreb9e"/>`,
		"fallback": "solar:danger-triangle-bold",
	});
}

export default Component;
