import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vihkhzb1c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vihkhzb1c"/>`,
		"fallback": "mdi:flight-land",
	});
}

export default Component;
