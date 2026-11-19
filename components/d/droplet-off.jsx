import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/j0ld87yxf.css';
import '../../css/e/ed2uv-biq.css';
import '../../css/f/ff6axl4cn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="j0ld87yxf"/><path class="ed2uv-biq"/><path class="ff6axl4cn"/></g>`,
		"fallback": "andrsrxn:droplet-off",
	});
}

export default Component;
