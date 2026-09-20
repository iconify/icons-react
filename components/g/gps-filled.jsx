import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fg5ymdb6l.css';

const viewBox = {"width":25,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fg5ymdb6l"/>`,
		"fallback": "tdesign:gps-filled",
	});
}

export default Component;
