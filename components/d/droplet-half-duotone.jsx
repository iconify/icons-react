import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/ty3uq0b7c.css';
import '../../css/p/pdct4bb7j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="secondary ty3uq0b7c"/><path class="pdct4bb7j primary"/></g>`,
		"fallback": "iconaut:droplet-half-duotone",
	});
}

export default Component;
