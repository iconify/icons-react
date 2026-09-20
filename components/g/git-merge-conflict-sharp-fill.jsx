import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/d/d1spiws2m.css';
import '../../css/p/p55l08o4q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="d1spiws2m"/><path class="p55l08o4q"/></g>`,
		"fallback": "keyline-icons:git-merge-conflict-sharp-fill",
	});
}

export default Component;
