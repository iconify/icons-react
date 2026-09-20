import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hg_c90b0p.css';
import '../../css/g/glt4_jb-t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="hg_c90b0p"/><path clip-rule="evenodd" class="glt4_jb-t"/></g>`,
		"fallback": "proicons:cloud-arrow-down",
	});
}

export default Component;
