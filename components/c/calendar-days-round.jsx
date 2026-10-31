import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kwqsjcb2i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kwqsjcb2i"/>`,
		"fallback": "coolicons:calendar-days-round",
	});
}

export default Component;
