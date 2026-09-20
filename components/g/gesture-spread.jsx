import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/ghjest0bt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ghjest0bt"/>`,
		"fallback": "mdi:gesture-spread",
	});
}

export default Component;
