import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/am5ozhb5c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="am5ozhb5c"/>`,
		"fallback": "mdi:beaker-outline",
	});
}

export default Component;
