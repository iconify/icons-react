import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/bxyqa-r4n.css';
import '../../css/j/jf3977e_v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="bxyqa-r4n"/><path clip-rule="evenodd" class="jf3977e_v"/></g>`,
		"fallback": "gg:film",
	});
}

export default Component;
