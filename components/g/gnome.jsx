import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j3fx53b5x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j3fx53b5x"/>`,
		"fallback": "mdi:gnome",
	});
}

export default Component;
