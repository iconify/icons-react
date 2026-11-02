import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t2yycg89f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t2yycg89f"/>`,
		"fallback": "mingcute:crutch-fill",
	});
}

export default Component;
