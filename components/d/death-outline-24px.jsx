import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/zcnvx6b2i.css';
import '../../css/l/lc2bhi9-j.css';
import '../../css/r/rfdykoh2m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="zcnvx6b2i"/><path clip-rule="evenodd" class="lc2bhi9-j"/><path class="rfdykoh2m"/></g>`,
		"fallback": "healthicons:death-outline-24px",
	});
}

export default Component;
