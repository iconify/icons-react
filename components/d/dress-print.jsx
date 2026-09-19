import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/kqvem9u7e.css';
import '../../css/i/iqdcki20w.css';
import '../../css/v/vsy6rtmax.css';
import '../../css/i/i7b6h4s-y.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="kqvem9u7e"/><path clip-rule="evenodd" class="iqdcki20w"/><path clip-rule="evenodd" class="vsy6rtmax"/><path class="i7b6h4s-y"/></g>`,
		"fallback": "pepicons:dress-print",
	});
}

export default Component;
