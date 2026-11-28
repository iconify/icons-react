import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jz32_dk2s.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/t/tnzxd8b-c.css';
import '../../css/t/twb1ymtuj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jz32_dk2s secondary"/><g class="dt0cm9dhy primary"><path class="tnzxd8b-c"/><path class="twb1ymtuj"/></g>`,
		"fallback": "iconaut:droplet-half-duo",
	});
}

export default Component;
