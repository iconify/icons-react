import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dxfx58bgn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dxfx58bgn"/>`,
		"fallback": "mingcute:currency-rubel-2-line",
	});
}

export default Component;
