import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k926z6j4f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k926z6j4f"/>`,
		"fallback": "weui:done2-outlined",
	});
}

export default Component;
