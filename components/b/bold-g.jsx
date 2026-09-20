import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vxwa7ub6s.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vxwa7ub6s"/>`,
		"fallback": "ooui:bold-g",
	});
}

export default Component;
