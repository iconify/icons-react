import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/b2v5vn92x.css';
import '../../css/k/k7ju33b9g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="b2v5vn92x secondary"/><path class="k7ju33b9g primary"/></g>`,
		"fallback": "iconaut:cloud-sun-rain-duotone",
	});
}

export default Component;
