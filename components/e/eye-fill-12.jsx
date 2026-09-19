import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/klebjebfq.css';
import '../../css/b/bacj-obey.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><circle class="klebjebfq"/><path class="bacj-obey"/></g>`,
		"fallback": "garden:eye-fill-12",
	});
}

export default Component;
