import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/f/fuchy-bvl.css';
import '../../css/s/s_gn3bcan.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="fuchy-bvl"/><path class="s_gn3bcan"/></g>`,
		"fallback": "keyline-icons:cursor-window-sharp-fill",
	});
}

export default Component;
