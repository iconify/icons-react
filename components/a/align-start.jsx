import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/fm2te3hit.css';
import '../../css/o/o_smrfbxe.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="fm2te3hit"/><path class="o_smrfbxe"/></g>`,
		"fallback": "bi:align-start",
	});
}

export default Component;
