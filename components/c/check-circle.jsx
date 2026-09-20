import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xgt2snb_h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xgt2snb_h"/>`,
		"fallback": "uil:check-circle",
	});
}

export default Component;
