import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pv4_ow18w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pv4_ow18w"/>`,
		"fallback": "ri:dice-3-fill",
	});
}

export default Component;
