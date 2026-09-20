import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/d7xy4dvdq.css';
import '../../css/o/o3g4sn7py.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="d7xy4dvdq"/><path clip-rule="evenodd" class="o3g4sn7py"/></g>`,
		"fallback": "majesticons:car",
	});
}

export default Component;
