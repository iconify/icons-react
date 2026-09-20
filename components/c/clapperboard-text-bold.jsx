import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/nntdrfmki.css';
import '../../css/r/ra3icybqn.css';
import '../../css/i/ia-wcjbpv.css';
import '../../css/s/shxjsdxjs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="nntdrfmki"/><path class="ra3icybqn"/><path clip-rule="evenodd" class="ia-wcjbpv"/><path class="shxjsdxjs"/></g>`,
		"fallback": "solar:clapperboard-text-bold",
	});
}

export default Component;
