import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/diyykabdl.css';
import '../../css/c/ctdwcibca.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="diyykabdl"/><path class="ctdwcibca"/></g>`,
		"fallback": "at-icons:car",
	});
}

export default Component;
