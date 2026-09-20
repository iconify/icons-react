import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oro_-ac7a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oro_-ac7a"/>`,
		"fallback": "mdi:headphones-bluetooth",
	});
}

export default Component;
