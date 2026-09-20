import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/le1xjwbpo.css';
import '../../css/w/wxmgkcc2x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="le1xjwbpo"/><path class="wxmgkcc2x"/>`,
		"fallback": "streamline-ultimate:composition-window-man-bold",
	});
}

export default Component;
