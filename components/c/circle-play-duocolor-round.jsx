import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/p/p9fo8pbdd.css';
import '../../css/q/q_a5zcbnk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="p9fo8pbdd"/><path class="q_a5zcbnk"/></g>`,
		"fallback": "coolicons:circle-play-duocolor-round",
	});
}

export default Component;
