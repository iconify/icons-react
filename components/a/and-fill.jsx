import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jch0wcbwv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jch0wcbwv"/>`,
		"fallback": "mingcute:and-fill",
	});
}

export default Component;
