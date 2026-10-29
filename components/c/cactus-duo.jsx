import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/v/vvf-p8mwk.css';
import '../../css/j/jzul1pbjt.css';
import '../../css/u/ukna4qm-o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="vvf-p8mwk"/><path class="jzul1pbjt wm-a"/><path class="ukna4qm-o"/></g>`,
		"fallback": "withicons:cactus-duo",
	});
}

export default Component;
