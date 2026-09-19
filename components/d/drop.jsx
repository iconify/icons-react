import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s_tdev-jz.css';

const viewBox = {"width":328,"height":496};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s_tdev-jz"/>`,
		"fallback": "ps:drop",
	});
}

export default Component;
