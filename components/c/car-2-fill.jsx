import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jc65wbbse.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jc65wbbse"/>`,
		"fallback": "mingcute:car-2-fill",
	});
}

export default Component;
