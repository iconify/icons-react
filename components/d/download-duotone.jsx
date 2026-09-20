import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/pnqmxebxd.css';
import '../../css/m/m34cnpb4k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="pnqmxebxd"/><path clip-rule="evenodd" class="m34cnpb4k"/></g>`,
		"fallback": "reicon:download-duotone",
	});
}

export default Component;
