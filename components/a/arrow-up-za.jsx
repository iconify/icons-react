import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/f-8auhb-c.css';
import '../../css/a/akh3rubhu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="f-8auhb-c"/><path class="akh3rubhu"/></g>`,
		"fallback": "hugeicons:arrow-up-za",
	});
}

export default Component;
