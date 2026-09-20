import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xc05s8evs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xc05s8evs"/>`,
		"fallback": "mingcute:formula-fill",
	});
}

export default Component;
