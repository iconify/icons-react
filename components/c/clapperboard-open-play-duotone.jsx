import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/bjil78bag.css';
import '../../css/n/n26cuvbqh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="bjil78bag"/><path class="n26cuvbqh"/></g>`,
		"fallback": "reicon:clapperboard-open-play-duotone",
	});
}

export default Component;
