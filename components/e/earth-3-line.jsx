import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zdr0_jbch.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zdr0_jbch"/>`,
		"fallback": "mingcute:earth-3-line",
	});
}

export default Component;
