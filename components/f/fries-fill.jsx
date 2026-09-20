import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a2v2ifbqw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="a2v2ifbqw"/>`,
		"fallback": "mingcute:fries-fill",
	});
}

export default Component;
