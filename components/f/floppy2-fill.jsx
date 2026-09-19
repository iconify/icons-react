import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/al1733b8f.css';
import '../../css/m/mjfu2bcrd.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="al1733b8f"/><path class="mjfu2bcrd"/></g>`,
		"fallback": "bi:floppy2-fill",
	});
}

export default Component;
