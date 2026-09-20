import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hea445i6n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hea445i6n"/>`,
		"fallback": "mdi:door-sliding-lock",
	});
}

export default Component;
