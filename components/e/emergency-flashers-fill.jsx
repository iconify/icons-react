import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l-27el72i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l-27el72i"/>`,
		"fallback": "mingcute:emergency-flashers-fill",
	});
}

export default Component;
