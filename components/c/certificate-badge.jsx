import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/gf0i1ln3b.css';
import '../../css/u/uaqobub-b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="gf0i1ln3b"/><path class="uaqobub-b"/></g>`,
		"fallback": "iconamoon:certificate-badge",
	});
}

export default Component;
