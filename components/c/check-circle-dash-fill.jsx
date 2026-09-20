import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tww3lhbbq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tww3lhbbq"/>`,
		"fallback": "mingcute:check-circle-dash-fill",
	});
}

export default Component;
