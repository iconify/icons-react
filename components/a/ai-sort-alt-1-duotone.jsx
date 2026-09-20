import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pvd5fubfl.css';
import '../../css/z/zfbbd1bmk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="pvd5fubfl"/><path class="zfbbd1bmk"/></g>`,
		"fallback": "si:ai-sort-alt-1-duotone",
	});
}

export default Component;
