import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/p-3ck9hgm.css';
import '../../css/i/i2ohuidbl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="p-3ck9hgm"/><path class="i2ohuidbl"/></g>`,
		"fallback": "tdesign:gender-male",
	});
}

export default Component;
