import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/l/lvsae0mus.css';
import '../../css/i/ibhxv1b9w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="lvsae0mus"/><path class="ibhxv1b9w"/></g>`,
		"fallback": "keyline-icons:folder-tree-sharp-duotone",
	});
}

export default Component;
