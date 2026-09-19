import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/g6uy-hb_n.css';
import '../../css/m/mr24kkb4a.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="g6uy-hb_n"/><path class="mr24kkb4a"/></g>`,
		"fallback": "bi:backpack3",
	});
}

export default Component;
