import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/e/eq2iy9b8b.css';
import '../../css/b/bl-ncmb1l.css';
import '../../css/q/qaarkib0y.css';
import '../../css/y/yle7k-b8s.css';
import '../../css/m/mrwc-puoh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="eq2iy9b8b"/><path class="bl-ncmb1l"/><path class="qaarkib0y"/><path class="yle7k-b8s"/><path class="mrwc-puoh"/></g>`,
		"fallback": "iconaut:hand-coins",
	});
}

export default Component;
