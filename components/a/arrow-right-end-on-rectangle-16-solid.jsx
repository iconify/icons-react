import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/rr6ntmvng.css';
import '../../css/e/eed-otb3f.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="rr6ntmvng"/><path class="eed-otb3f"/></g>`,
		"fallback": "heroicons:arrow-right-end-on-rectangle-16-solid",
	});
}

export default Component;
