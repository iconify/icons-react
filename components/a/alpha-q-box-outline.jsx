import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/swm5vp20p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="swm5vp20p"/>`,
		"fallback": "mdi:alpha-q-box-outline",
	});
}

export default Component;
