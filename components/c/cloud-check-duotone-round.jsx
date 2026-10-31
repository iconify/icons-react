import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/d06hhzb4e.css';
import '../../css/x/xt7sp9qwl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="d06hhzb4e"/><path class="xt7sp9qwl"/></g>`,
		"fallback": "coolicons:cloud-check-duotone-round",
	});
}

export default Component;
