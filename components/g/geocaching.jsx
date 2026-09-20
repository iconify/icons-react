import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wysf0yo7w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wysf0yo7w"/>`,
		"fallback": "simple-icons:geocaching",
	});
}

export default Component;
