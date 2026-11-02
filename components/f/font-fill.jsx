import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/my-z3rj2w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="my-z3rj2w"/>`,
		"fallback": "mingcute:font-fill",
	});
}

export default Component;
