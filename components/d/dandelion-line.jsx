import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ojh942b-r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ojh942b-r"/>`,
		"fallback": "mingcute:dandelion-line",
	});
}

export default Component;
