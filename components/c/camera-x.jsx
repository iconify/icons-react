import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p1fw09i4p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p1fw09i4p"/>`,
		"fallback": "noviair-light:camera-x",
	});
}

export default Component;
