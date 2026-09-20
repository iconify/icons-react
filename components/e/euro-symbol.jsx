import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fyc5tabsi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fyc5tabsi"/>`,
		"fallback": "mdi:euro-symbol",
	});
}

export default Component;
