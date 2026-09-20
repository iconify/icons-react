import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/kn4v-mbtk.css';
import '../../css/k/kjb-dmb9j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="kn4v-mbtk"/><path clip-rule="evenodd" class="kjb-dmb9j"/></g>`,
		"fallback": "solar:banknote-bold",
	});
}

export default Component;
