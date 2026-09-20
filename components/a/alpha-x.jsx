import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i65qq5b_o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i65qq5b_o"/>`,
		"fallback": "mdi:alpha-x",
	});
}

export default Component;
