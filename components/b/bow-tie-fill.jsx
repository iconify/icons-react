import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/chk-b_b3l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="chk-b_b3l"/>`,
		"fallback": "mingcute:bow-tie-fill",
	});
}

export default Component;
