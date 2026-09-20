import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dxjwdtq3t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dxjwdtq3t"/>`,
		"fallback": "mingcute:earth-longitude-line",
	});
}

export default Component;
