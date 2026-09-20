import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r0dyo-b5v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r0dyo-b5v"/>`,
		"fallback": "pixelarticons:car-sharp",
	});
}

export default Component;
