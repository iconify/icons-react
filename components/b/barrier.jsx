import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wul2d8-4d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wul2d8-4d"/>`,
		"fallback": "sidekickicons:barrier",
	});
}

export default Component;
