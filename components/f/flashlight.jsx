import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mv-2k5v_z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mv-2k5v_z"/>`,
		"fallback": "mdi:flashlight",
	});
}

export default Component;
