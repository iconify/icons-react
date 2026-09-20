import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bn5gwnb1v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bn5gwnb1v"/>`,
		"fallback": "mdi:bulbs-off-outline",
	});
}

export default Component;
