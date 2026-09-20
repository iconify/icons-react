import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/ar3kukqib.css';
import '../../css/g/gfak_b84w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ar3kukqib"/><path class="gfak_b84w"/></g>`,
		"fallback": "si:flow-tree-duotone",
	});
}

export default Component;
