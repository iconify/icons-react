import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/ks7hnbbae.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ks7hnbbae"/>`,
		"fallback": "mingcute:clock-5-fill",
	});
}

export default Component;
