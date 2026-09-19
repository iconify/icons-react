import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/x_bc36b2h.css';
import '../../css/u/uqua9cb9x.css';
import '../../css/e/egneazb5l.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="x_bc36b2h"/><path class="uqua9cb9x"/><path class="egneazb5l"/></g>`,
		"fallback": "at-icons:file-cross",
	});
}

export default Component;
