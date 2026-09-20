import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/owf71glth.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="owf71glth"/>`,
		"fallback": "mdi:cloud-remove",
	});
}

export default Component;
