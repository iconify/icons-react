import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xfh45bc7x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xfh45bc7x"/>`,
		"fallback": "mingcute:ad-rectangle-fill",
	});
}

export default Component;
