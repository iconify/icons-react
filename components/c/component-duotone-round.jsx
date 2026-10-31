import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/shctg_sis.css';
import '../../css/d/d9oi_-bbs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="shctg_sis"/><path class="d9oi_-bbs"/></g>`,
		"fallback": "coolicons:component-duotone-round",
	});
}

export default Component;
