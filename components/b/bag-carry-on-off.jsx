import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dvg7dvb_w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dvg7dvb_w"/>`,
		"fallback": "mdi:bag-carry-on-off",
	});
}

export default Component;
