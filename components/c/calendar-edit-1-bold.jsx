import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wjui_cb1p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wjui_cb1p"/>`,
		"fallback": "streamline-ultimate:calendar-edit-1-bold",
	});
}

export default Component;
