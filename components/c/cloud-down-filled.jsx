import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/r-pirlb1i.css';
import '../../css/c/ci9fsyyqx.css';
import '../../css/m/meco3rogb.css';
import '../../css/s/s29ll1g5q.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="r-pirlb1i"/><path class="ci9fsyyqx"/><path class="meco3rogb"/><path class="s29ll1g5q"/></g>`,
		"fallback": "pepicons:cloud-down-filled",
	});
}

export default Component;
