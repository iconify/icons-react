import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wm2_xkwlg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wm2_xkwlg"/>`,
		"fallback": "mdi:cash-multiple",
	});
}

export default Component;
