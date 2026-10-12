import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yvf4v7u0f.css';
import '../../css/s/s0et71vlc.css';
import '../../css/d/d6x0zjiic.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="yvf4v7u0f"/><path class="s0et71vlc"/><path class="d6x0zjiic"/></g>`,
		"fallback": "andrsrxn:book-check",
	});
}

export default Component;
