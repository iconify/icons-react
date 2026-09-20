import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/do7vbm-1z.css';
import '../../css/j/jj-kzpbmt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="do7vbm-1z"/><circle class="jj-kzpbmt"/></g>`,
		"fallback": "proicons:door-open",
	});
}

export default Component;
