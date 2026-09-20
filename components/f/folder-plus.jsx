import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/lq5xb8bez.css';
import '../../css/o/o_78qwqmp.css';
import '../../css/h/hxiimb9fh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="lq5xb8bez"/><path class="o_78qwqmp"/><path class="hxiimb9fh"/></g>`,
		"fallback": "majesticons:folder-plus",
	});
}

export default Component;
