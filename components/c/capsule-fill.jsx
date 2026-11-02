import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nclaoly9j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nclaoly9j"/>`,
		"fallback": "mingcute:capsule-fill",
	});
}

export default Component;
