import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kuxx9b2_q.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kuxx9b2_q"/>`,
		"fallback": "ps:film",
	});
}

export default Component;
