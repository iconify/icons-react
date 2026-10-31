import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/s50jjhbny.css';
import '../../css/c/cutx0-u5p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="s50jjhbny"/><path class="cutx0-u5p"/></g>`,
		"fallback": "coolicons:bulb-duotone-round",
	});
}

export default Component;
