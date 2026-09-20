import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/epg8ibcng.css';
import '../../css/u/uhro_3l0u.css';
import '../../css/i/iu5wbjbno.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="epg8ibcng"/><path class="uhro_3l0u"/><path class="iu5wbjbno"/></g>`,
		"fallback": "mynaui:credit-card-check-solid",
	});
}

export default Component;
