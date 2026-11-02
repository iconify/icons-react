import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k59_d8b2q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k59_d8b2q"/>`,
		"fallback": "mingcute:hammer-2-fill",
	});
}

export default Component;
