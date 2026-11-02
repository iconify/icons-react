import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z1tr9t9ml.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z1tr9t9ml"/>`,
		"fallback": "mingcute:fast-rewind-fill",
	});
}

export default Component;
