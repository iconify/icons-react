import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hxpzp1m5f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hxpzp1m5f"/>`,
		"fallback": "mdi:cloud-refresh-variant",
	});
}

export default Component;
