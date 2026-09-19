import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/vhtxs9btf.css';
import '../../css/v/v03r3zckg.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="vhtxs9btf"/><path class="v03r3zckg"/></g>`,
		"fallback": "bi:camera2",
	});
}

export default Component;
