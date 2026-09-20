import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dxl_0ldls.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dxl_0ldls"/>`,
		"fallback": "mingcute:cloud-snow-fill",
	});
}

export default Component;
