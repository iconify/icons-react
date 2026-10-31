import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lpm7dvn9t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lpm7dvn9t"/>`,
		"fallback": "coolicons:hotel-round",
	});
}

export default Component;
