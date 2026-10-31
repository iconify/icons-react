import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/plz5mtb1l.css';
import '../../css/o/o9so35bve.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="plz5mtb1l"/><path class="o9so35bve"/></g>`,
		"fallback": "coolicons:bluesky-duotone-round",
	});
}

export default Component;
