import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m1v_-3v3c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m1v_-3v3c"/>`,
		"fallback": "keyline-icons:chevrons-down-fill",
	});
}

export default Component;
