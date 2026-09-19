import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/kvdw19b_w.css';
import '../../css/i/iaw58s9pl.css';

const viewBox = {"width":38,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="kvdw19b_w"/><path class="iaw58s9pl"/></g>`,
		"fallback": "et:envelope",
	});
}

export default Component;
