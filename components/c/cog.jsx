import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vshc7ebho.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vshc7ebho"/>`,
		"fallback": "mdi:cog",
	});
}

export default Component;
