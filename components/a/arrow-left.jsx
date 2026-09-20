import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l1nuh0b-v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l1nuh0b-v"/>`,
		"fallback": "mdi:arrow-left",
	});
}

export default Component;
