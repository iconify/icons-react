import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pvudj1bgl.css';
import '../../css/s/sqwc9ab7g.css';
import '../../css/a/aos7vkg4s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="pvudj1bgl"/><path class="sqwc9ab7g"/><path class="aos7vkg4s"/></g>`,
		"fallback": "andrsrxn:folders",
	});
}

export default Component;
