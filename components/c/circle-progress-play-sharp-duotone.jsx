import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/t/t0_3emlbr.css';
import '../../css/b/by3trvvnz.css';
import '../../css/n/n1e3rqbim.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="t0_3emlbr"/><path class="by3trvvnz"/><path class="n1e3rqbim"/></g>`,
		"fallback": "keyline-icons:circle-progress-play-sharp-duotone",
	});
}

export default Component;
