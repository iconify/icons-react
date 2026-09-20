import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ewh7etqzq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ewh7etqzq"/>`,
		"fallback": "mingcute:back-line",
	});
}

export default Component;
