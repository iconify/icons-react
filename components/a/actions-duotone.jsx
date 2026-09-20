import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k0cp3tg0q.css';
import '../../css/e/e4ua-gbce.css';
import '../../css/k/k0cm-0j9d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="k0cp3tg0q"/><path class="e4ua-gbce"/><path class="k0cm-0j9d"/></g>`,
		"fallback": "si:actions-duotone",
	});
}

export default Component;
