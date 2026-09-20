import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/uy4ebyq_a.css';
import '../../css/s/scn38ghnw.css';
import '../../css/n/n7ito-b2t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="uy4ebyq_a"/><path class="scn38ghnw"/><path class="n7ito-b2t"/></g>`,
		"fallback": "nrk:airplay-solid",
	});
}

export default Component;
