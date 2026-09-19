import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/b0bit3byi.css';
import '../../css/r/rhl4ufvtw.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="b0bit3byi"/><path class="rhl4ufvtw"/></g>`,
		"fallback": "bi:file-easel-fill",
	});
}

export default Component;
