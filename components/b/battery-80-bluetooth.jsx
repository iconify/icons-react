import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fsyu9yx7g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fsyu9yx7g"/>`,
		"fallback": "mdi:battery-80-bluetooth",
	});
}

export default Component;
