import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iy14u9b5u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iy14u9b5u"/>`,
		"fallback": "thesvg-color:circuitpython",
	});
}

export default Component;
