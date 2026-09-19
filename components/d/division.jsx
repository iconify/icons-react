import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/w2vq63b3k.css';
import '../../css/q/qufharbmm.css';
import '../../css/p/p9rvr-ggk.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="w2vq63b3k"/><circle class="qufharbmm"/><circle class="p9rvr-ggk"/></g>`,
		"fallback": "pepicons:division",
	});
}

export default Component;
