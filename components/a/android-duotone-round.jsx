import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mn3dzebek.css';
import '../../css/f/ftyha7-_g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="mn3dzebek"/><path class="ftyha7-_g"/></g>`,
		"fallback": "coolicons:android-duotone-round",
	});
}

export default Component;
