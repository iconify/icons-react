import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hs86tq1hw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hs86tq1hw"/>`,
		"fallback": "mdi:bell-cancel",
	});
}

export default Component;
