import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kqkph08dj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kqkph08dj"/>`,
		"fallback": "mingcute:clock-6-line",
	});
}

export default Component;
