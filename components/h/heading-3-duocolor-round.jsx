import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/w/wh94nybiu.css';
import '../../css/r/rb77lkb_u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="wh94nybiu"/><path class="rb77lkb_u"/></g>`,
		"fallback": "coolicons:heading-3-duocolor-round",
	});
}

export default Component;
