import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/kygou91ff.css';
import '../../css/g/g6ff9lbxr.css';
import '../../css/e/exxqrpb6y.css';
import '../../css/t/tjyguc_ul.css';

const viewBox = {"width":34,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="kygou91ff"/><path class="g6ff9lbxr"/><path class="exxqrpb6y"/><path class="tjyguc_ul"/></g>`,
		"fallback": "et:documents",
	});
}

export default Component;
