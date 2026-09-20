import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vvck6j57a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vvck6j57a"/>`,
		"fallback": "mdi:code-not-equal",
	});
}

export default Component;
