import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/zszz-sbbo.css';
import '../../css/d/d4ssnibcc.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="zszz-sbbo"/><path class="d4ssnibcc"/></g>`,
		"fallback": "bi:cassette-fill",
	});
}

export default Component;
