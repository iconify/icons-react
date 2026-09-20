import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/ww_qxgb9x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ww_qxgb9x"/>`,
		"fallback": "solar:calendar-minimalistic-outline",
	});
}

export default Component;
