import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/npn5zfbdr.css';
import '../../css/p/p7p0_0bwx.css';
import '../../css/f/ftbc77f3y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="npn5zfbdr"/><rect transform="rotate(-90 7.33 5.59)" class="p7p0_0bwx"/><path class="ftbc77f3y"/></g>`,
		"fallback": "andrsrxn:clipboard-content",
	});
}

export default Component;
