import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/px9blzb3e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="px9blzb3e"/>`,
		"fallback": "pixelarticons:braces-sharp",
	});
}

export default Component;
