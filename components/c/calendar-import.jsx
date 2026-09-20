import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fxy2s2brv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fxy2s2brv"/>`,
		"fallback": "pixelarticons:calendar-import",
	});
}

export default Component;
