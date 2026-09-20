import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/d9q_upw-t.css';
import '../../css/k/kx1edab9u.css';
import '../../css/p/phcgag_tl.css';
import '../../css/m/mo5netbri.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="d9q_upw-t"/><path clip-rule="evenodd" class="kx1edab9u"/><path clip-rule="evenodd" class="phcgag_tl"/><path class="mo5netbri"/></g>`,
		"fallback": "pepicons-pencil:arrow-left-off",
	});
}

export default Component;
