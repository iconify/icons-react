import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ygdzmab_v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ygdzmab_v"/>`,
		"fallback": "mingcute:bluetooth-connected-line",
	});
}

export default Component;
