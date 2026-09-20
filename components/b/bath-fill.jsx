import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cyzx15osk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cyzx15osk"/>`,
		"fallback": "mingcute:bath-fill",
	});
}

export default Component;
