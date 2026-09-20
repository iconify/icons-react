import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/le2l0650x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="le2l0650x"/>`,
		"fallback": "mdi:garage-alert-variant",
	});
}

export default Component;
