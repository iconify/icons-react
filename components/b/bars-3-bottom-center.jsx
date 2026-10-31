import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wpi02u7-g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wpi02u7-g"/>`,
		"fallback": "sidekickicons:bars-3-bottom-center",
	});
}

export default Component;
