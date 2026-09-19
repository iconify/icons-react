import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/aa_hs9b5n.css';
import '../../css/f/fb4bo-cic.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="aa_hs9b5n"/><path class="fb4bo-cic"/></g>`,
		"fallback": "iconamoon:frame-duotone",
	});
}

export default Component;
