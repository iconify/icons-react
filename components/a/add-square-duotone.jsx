import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/iq2v3fbkd.css';
import '../../css/w/w2ktzjvro.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="iq2v3fbkd"/><path class="w2ktzjvro"/></g>`,
		"fallback": "lets-icons:add-square-duotone",
	});
}

export default Component;
