import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rxlwtv8gm.css';
import '../../css/i/ixwp6mb5s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="rxlwtv8gm"/><path class="ixwp6mb5s"/></g>`,
		"fallback": "coolicons:headset-duotone-round",
	});
}

export default Component;
