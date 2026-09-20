import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/h3_e41z0g.css';
import '../../css/t/tp4fe0uik.css';
import '../../css/u/uufbd19qv.css';
import '../../css/x/x4fswytty.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="h3_e41z0g"/><path class="tp4fe0uik"/><path class="uufbd19qv"/><path class="x4fswytty"/></g>`,
		"fallback": "streamline-cyber-color:first-aid-plaster",
	});
}

export default Component;
