import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/r/rtoajeejb.css';
import '../../css/p/p5v7-hblj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="rtoajeejb"/><path class="p5v7-hblj"/></g>`,
		"fallback": "withicons:align-left-sketch",
	});
}

export default Component;
