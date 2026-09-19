import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tpx_avb5q.css';
import '../../css/o/o2nk84i8d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tpx_avb5q"/><circle class="o2nk84i8d"/>`,
		"fallback": "bx:bxl-figma",
	});
}

export default Component;
