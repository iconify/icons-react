import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/sq2ltrr7i.css';
import '../../css/b/b6we8-e-p.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="sq2ltrr7i"/><path class="b6we8-e-p"/></g>`,
		"fallback": "at-icons:gobot",
	});
}

export default Component;
