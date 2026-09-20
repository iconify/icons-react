import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fn0_anb_t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fn0_anb_t"/>`,
		"fallback": "mdi:basket-minus",
	});
}

export default Component;
