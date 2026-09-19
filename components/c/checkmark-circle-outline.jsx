import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h7_r22bur.css';
import '../../css/z/zchckjb-w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h7_r22bur"/><path class="zchckjb-w"/>`,
		"fallback": "eva:checkmark-circle-outline",
	});
}

export default Component;
