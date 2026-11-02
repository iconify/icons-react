import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n7jzhi2jd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n7jzhi2jd"/>`,
		"fallback": "mingcute:headphone-fill",
	});
}

export default Component;
