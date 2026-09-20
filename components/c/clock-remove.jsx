import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a64h9hb8s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a64h9hb8s"/>`,
		"fallback": "mdi:clock-remove",
	});
}

export default Component;
