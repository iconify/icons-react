import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/f88q_7b9p.css';
import '../../css/b/bkdyu3kxb.css';
import '../../css/g/gm_nkzbxx.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="f88q_7b9p"/><path clip-rule="evenodd" class="bkdyu3kxb"/><path class="gm_nkzbxx"/></g>`,
		"fallback": "gravity-ui:firewall",
	});
}

export default Component;
