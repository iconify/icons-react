import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/la_p4fnuj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="la_p4fnuj"/>`,
		"fallback": "mdi:garage-lock",
	});
}

export default Component;
