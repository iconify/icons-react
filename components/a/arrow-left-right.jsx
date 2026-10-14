import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xn5eo9bqs.css';
import '../../css/y/ycvs04bbk.css';
import '../../css/u/u-ofegb1i.css';
import '../../css/e/e4670nb9o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xn5eo9bqs"><path class="ycvs04bbk"/><path class="u-ofegb1i"/><path class="e4670nb9o"/></g>`,
		"fallback": "matita:arrow-left-right",
	});
}

export default Component;
