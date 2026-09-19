import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dq9p_gbeq.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dq9p_gbeq"/>`,
		"fallback": "ps:girl-confused",
	});
}

export default Component;
