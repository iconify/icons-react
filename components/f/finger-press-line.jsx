import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mzt3dg0_l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mzt3dg0_l"/>`,
		"fallback": "mingcute:finger-press-line",
	});
}

export default Component;
