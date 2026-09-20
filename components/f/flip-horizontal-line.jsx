import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wl0rvqm_l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wl0rvqm_l"/>`,
		"fallback": "ri:flip-horizontal-line",
	});
}

export default Component;
