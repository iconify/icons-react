import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xm34mjb-k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xm34mjb-k"/>`,
		"fallback": "bx:bxs-bell-minus",
	});
}

export default Component;
