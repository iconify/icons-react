import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yxg6ctbyz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yxg6ctbyz"/>`,
		"fallback": "tabler:droplet-up",
	});
}

export default Component;
