import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/uagj96ooh.css';
import '../../css/f/fa-fx9sqh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="uagj96ooh"/><path class="fa-fx9sqh"/></g>`,
		"fallback": "coolicons:database-duotone-round",
	});
}

export default Component;
