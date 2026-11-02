import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pb6clzb2v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pb6clzb2v"/>`,
		"fallback": "mingcute:clock-9-line",
	});
}

export default Component;
