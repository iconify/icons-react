import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/s5kiphefr.css';
import '../../css/q/qy-ljzb9y.css';
import '../../css/i/iveupcb1w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="s5kiphefr"/><path class="qy-ljzb9y"/><path class="iveupcb1w"/></g>`,
		"fallback": "reicon:clapperboard-text-duotone",
	});
}

export default Component;
