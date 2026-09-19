import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/dvy6mmbjg.css';
import '../../css/g/g0preuo0e.css';
import '../../css/c/c9mv_tbxb.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="dvy6mmbjg"/><path clip-rule="evenodd" class="g0preuo0e"/><path class="c9mv_tbxb"/></g>`,
		"fallback": "at-icons:film-cartridge",
	});
}

export default Component;
