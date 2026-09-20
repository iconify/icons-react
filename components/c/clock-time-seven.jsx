import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nabu3x5no.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nabu3x5no"/>`,
		"fallback": "mdi:clock-time-seven",
	});
}

export default Component;
