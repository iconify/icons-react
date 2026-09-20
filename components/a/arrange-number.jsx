import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/upwt56ycm.css';
import '../../css/i/iwkfv4boi.css';
import '../../css/d/dt4c_ac6e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="upwt56ycm"/><path class="iwkfv4boi"/><path class="dt4c_ac6e"/></g>`,
		"fallback": "streamline-ultimate-color:arrange-number",
	});
}

export default Component;
