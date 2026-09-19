import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/kje_q2a3e.css';
import '../../css/m/m3vej3bgt.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="kje_q2a3e"/><path class="m3vej3bgt"/></g>`,
		"fallback": "heroicons-solid:clipboard",
	});
}

export default Component;
