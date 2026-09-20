import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/w/wy4vunv-p.css';
import '../../css/z/zdda6ywtc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="wy4vunv-p"/><path class="zdda6ywtc"/></g>`,
		"fallback": "tabler:building-tunnel",
	});
}

export default Component;
