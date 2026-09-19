import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/b/bi0rg095l.css';
import '../../css/u/ubxm2nkla.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="bi0rg095l"/><path class="ubxm2nkla"/></g>`,
		"fallback": "iconoir:floppy-disk",
	});
}

export default Component;
