import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hb_xsvb0p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hb_xsvb0p"/>`,
		"fallback": "mingcute:file-axis-3d-fill",
	});
}

export default Component;
