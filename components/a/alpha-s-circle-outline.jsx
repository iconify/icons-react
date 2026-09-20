import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x3cim7bff.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x3cim7bff"/>`,
		"fallback": "mdi:alpha-s-circle-outline",
	});
}

export default Component;
