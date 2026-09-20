import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/gasfqu__j.css';
import '../../css/w/wttt-oqxa.css';
import '../../css/q/q81bn74-o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="gasfqu__j"/><path clip-rule="evenodd" class="wttt-oqxa"/><path class="q81bn74-o"/></g>`,
		"fallback": "nrk:image-stack-expressive",
	});
}

export default Component;
