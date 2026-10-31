import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ydtglrbkm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ydtglrbkm"/>`,
		"fallback": "coolicons:face-sad-fill-round",
	});
}

export default Component;
