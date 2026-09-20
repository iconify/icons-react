import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xwa8e7bwp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xwa8e7bwp"/>`,
		"fallback": "pixelarticons:calendar-export",
	});
}

export default Component;
