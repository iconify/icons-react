import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fhhznw4hd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fhhznw4hd"/>`,
		"fallback": "ix:generic-device-lock",
	});
}

export default Component;
