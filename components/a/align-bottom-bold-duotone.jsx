import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/s4lmu1bbq.css';
import '../../css/w/weko16myo.css';
import '../../css/f/fwgp1tb4z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="s4lmu1bbq"/><path class="weko16myo"/><path clip-rule="evenodd" class="fwgp1tb4z"/></g>`,
		"fallback": "solar:align-bottom-bold-duotone",
	});
}

export default Component;
