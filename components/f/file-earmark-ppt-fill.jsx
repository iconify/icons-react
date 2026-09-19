import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/fwfe79b-h.css';
import '../../css/u/ul2l0-bcn.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="fwfe79b-h"/><path class="ul2l0-bcn"/></g>`,
		"fallback": "bi:file-earmark-ppt-fill",
	});
}

export default Component;
