import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gakpreb3l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gakpreb3l"/>`,
		"fallback": "pixelarticons:gps-2",
	});
}

export default Component;
