import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fexe7_bbq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fexe7_bbq"/>`,
		"fallback": "mingcute:high-knees-line",
	});
}

export default Component;
