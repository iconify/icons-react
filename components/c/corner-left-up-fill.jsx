import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/grf4x6b4m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="grf4x6b4m"/>`,
		"fallback": "mingcute:corner-left-up-fill",
	});
}

export default Component;
