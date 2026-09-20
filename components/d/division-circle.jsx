import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/f/ff3y5p45z.css';
import '../../css/h/he5mtgsip.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="ff3y5p45z"/><path class="he5mtgsip"/></g>`,
		"fallback": "streamline-sharp:division-circle",
	});
}

export default Component;
