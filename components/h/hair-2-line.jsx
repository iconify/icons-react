import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vxf-x0wmr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vxf-x0wmr"/>`,
		"fallback": "mingcute:hair-2-line",
	});
}

export default Component;
