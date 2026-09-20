import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/xyjtgccot.css';
import '../../css/g/g6ol-3g7o.css';
import '../../css/m/mvo2v-b6d.css';
import '../../css/x/x_vvd-buy.css';
import '../../css/s/s-zutcg8k.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><g class="xyjtgccot"><path class="g6ol-3g7o"/><path clip-rule="evenodd" class="mvo2v-b6d"/></g><path clip-rule="evenodd" class="x_vvd-buy"/><path clip-rule="evenodd" class="s-zutcg8k"/></g>`,
		"fallback": "pepicons-print:comet",
	});
}

export default Component;
