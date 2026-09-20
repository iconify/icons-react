import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lp2t19eno.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lp2t19eno"/>`,
		"fallback": "mdi:globe-light",
	});
}

export default Component;
