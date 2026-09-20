import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hc2ot-beb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hc2ot-beb"/>`,
		"fallback": "mdi:baby-bottle-outline",
	});
}

export default Component;
