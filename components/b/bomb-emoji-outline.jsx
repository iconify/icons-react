import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/y0hv-pbtr.css';
import '../../css/s/s_kd59b_o.css';
import '../../css/b/byt4im-ru.css';
import '../../css/e/ejn2f72vs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="y0hv-pbtr"/><path class="s_kd59b_o"/><path class="byt4im-ru"/><path clip-rule="evenodd" class="ejn2f72vs"/></g>`,
		"fallback": "solar:bomb-emoji-outline",
	});
}

export default Component;
