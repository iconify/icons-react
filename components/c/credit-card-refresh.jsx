import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v-_rn-v-h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v-_rn-v-h"/>`,
		"fallback": "mdi:credit-card-refresh",
	});
}

export default Component;
