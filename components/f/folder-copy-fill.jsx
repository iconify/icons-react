import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/stvmtma2j.css';
import '../../css/k/kngqd45jx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="stvmtma2j"/><path class="kngqd45jx"/></g>`,
		"fallback": "lets-icons:folder-copy-fill",
	});
}

export default Component;
