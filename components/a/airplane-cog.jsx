import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bao4k39lq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bao4k39lq"/>`,
		"fallback": "mdi:airplane-cog",
	});
}

export default Component;
