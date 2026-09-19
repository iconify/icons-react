import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yyy3pubza.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yyy3pubza"/>`,
		"fallback": "eva:droplet-off-outline",
	});
}

export default Component;
