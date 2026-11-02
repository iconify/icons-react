import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j52f7_bxw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j52f7_bxw"/>`,
		"fallback": "mingcute:copyright-fill",
	});
}

export default Component;
