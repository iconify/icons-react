import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wvlvdy-0g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wvlvdy-0g"/>`,
		"fallback": "mdi:alert-rhombus-outline",
	});
}

export default Component;
