import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z61j5nz5e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z61j5nz5e"/>`,
		"fallback": "pixelarticons:avatar-square-sharp",
	});
}

export default Component;
