import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hm8xa4n4c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hm8xa4n4c"/>`,
		"fallback": "mingcute:apple-fill",
	});
}

export default Component;
