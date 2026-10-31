import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sol21dz1r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sol21dz1r"/>`,
		"fallback": "coolicons:calendar-days-fill-round",
	});
}

export default Component;
