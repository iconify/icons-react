import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/j/j6qgmac-u.css';
import '../../css/m/mgjkeouhs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="j6qgmac-u"/><path class="mgjkeouhs"/></g>`,
		"fallback": "streamline-sharp:insert-cloud-link",
	});
}

export default Component;
