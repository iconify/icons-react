import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/q_8y2ebqg.css';
import '../../css/z/z21dttb-a.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="q_8y2ebqg"/><path class="z21dttb-a"/></g>`,
		"fallback": "bi:9-square-fill",
	});
}

export default Component;
