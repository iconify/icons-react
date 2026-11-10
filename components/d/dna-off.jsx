import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/lkl3aubcf.css';
import '../../css/o/o3mq6ubky.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="lkl3aubcf"/><path class="o3mq6ubky"/></g>`,
		"fallback": "andrsrxn:dna-off",
	});
}

export default Component;
