import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/ksuofjb9c.css';
import '../../css/k/k499d4b_t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="ksuofjb9c"/><path class="k499d4b_t"/></g>`,
		"fallback": "solar:case-minimalistic-bold-duotone",
	});
}

export default Component;
