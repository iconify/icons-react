import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rockq_psm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rockq_psm"/>`,
		"fallback": "mdi:alpha-c-circle-outline",
	});
}

export default Component;
