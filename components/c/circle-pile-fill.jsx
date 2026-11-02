import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/se4p66b2y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="se4p66b2y"/>`,
		"fallback": "mingcute:circle-pile-fill",
	});
}

export default Component;
