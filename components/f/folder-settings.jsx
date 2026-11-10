import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/y-brm0byh.css';
import '../../css/b/bj5taw8na.css';
import '../../css/s/sfrze3jxm.css';
import '../../css/i/i1z64bwjv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="y-brm0byh"/><path class="bj5taw8na"/><circle class="sfrze3jxm"/><path class="i1z64bwjv"/></g>`,
		"fallback": "andrsrxn:folder-settings",
	});
}

export default Component;
