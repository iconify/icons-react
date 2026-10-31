import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s2orr_bkt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s2orr_bkt"/>`,
		"fallback": "coolicons:circle-warning-round",
	});
}

export default Component;
