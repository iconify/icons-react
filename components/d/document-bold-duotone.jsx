import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/jjq2qh_fp.css';
import '../../css/u/u-h_lzw0l.css';
import '../../css/s/smees7jgk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="jjq2qh_fp"/><path class="u-h_lzw0l"/><path class="smees7jgk"/></g>`,
		"fallback": "solar:document-bold-duotone",
	});
}

export default Component;
