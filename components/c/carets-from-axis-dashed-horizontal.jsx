import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vaic6sbwa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vaic6sbwa"/>`,
		"fallback": "lucide:carets-from-axis-dashed-horizontal",
	});
}

export default Component;
