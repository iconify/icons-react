import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/q/qtx3gwboz.css';
import '../../css/h/hw4w3wbpy.css';
import '../../css/c/c0jlas_ay.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="qtx3gwboz"/><path class="hw4w3wbpy wm-k"/><path class="c0jlas_ay wm-a"/></g>`,
		"fallback": "withicons:avatar-bunny-sketch",
	});
}

export default Component;
