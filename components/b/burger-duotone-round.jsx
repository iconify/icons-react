import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/tbxgiabib.css';
import '../../css/q/qdyw2jb_l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="tbxgiabib"/><path class="qdyw2jb_l"/></g>`,
		"fallback": "coolicons:burger-duotone-round",
	});
}

export default Component;
