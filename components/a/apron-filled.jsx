import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yw1netl8d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yw1netl8d"/>`,
		"fallback": "griddy-icons:apron-filled",
	});
}

export default Component;
