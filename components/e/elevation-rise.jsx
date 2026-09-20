import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qxkb7-xri.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qxkb7-xri"/>`,
		"fallback": "mdi:elevation-rise",
	});
}

export default Component;
