import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ulaanbc5v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ulaanbc5v"/>`,
		"fallback": "pixelarticons:battery-1",
	});
}

export default Component;
