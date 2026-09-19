import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/si02sxb1i.css';
import '../../css/k/kat_bxb3i.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="si02sxb1i"/><path class="kat_bxb3i"/></g>`,
		"fallback": "bi:compass",
	});
}

export default Component;
