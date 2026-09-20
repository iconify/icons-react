import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/skdzxpg8m.css';
import '../../css/p/p23iy0bns.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="skdzxpg8m"/><path class="p23iy0bns"/></g>`,
		"fallback": "tdesign:delete-time",
	});
}

export default Component;
