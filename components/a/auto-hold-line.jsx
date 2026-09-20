import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/usrx4ob1k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="usrx4ob1k"/>`,
		"fallback": "mingcute:auto-hold-line",
	});
}

export default Component;
