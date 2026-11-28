import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/anu2djb_r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="anu2djb_r"/>`,
		"fallback": "noviair-light:droplet-plus",
	});
}

export default Component;
