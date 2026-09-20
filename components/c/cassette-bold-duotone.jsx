import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/zbz6dmcab.css';
import '../../css/y/ypxjrab_t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="zbz6dmcab"/><path clip-rule="evenodd" class="ypxjrab_t"/></g>`,
		"fallback": "solar:cassette-bold-duotone",
	});
}

export default Component;
