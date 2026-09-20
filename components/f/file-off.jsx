import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/s0_g53b0m.css';
import '../../css/a/azeq84zvv.css';
import '../../css/m/mponw-bea.css';
import '../../css/w/w7g4r3epk.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="s0_g53b0m"/><path class="azeq84zvv"/><path clip-rule="evenodd" class="mponw-bea"/><path class="w7g4r3epk"/></g>`,
		"fallback": "pepicons-print:file-off",
	});
}

export default Component;
