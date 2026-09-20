import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r-q_h0b0l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r-q_h0b0l"/>`,
		"fallback": "mdi:hydraulic-oil-temperature",
	});
}

export default Component;
