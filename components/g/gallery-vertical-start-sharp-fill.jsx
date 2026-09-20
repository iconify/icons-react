import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/i/ipxpplbuj.css';
import '../../css/j/joa1ztv3m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="ipxpplbuj"/><path class="joa1ztv3m"/></g>`,
		"fallback": "keyline-icons:gallery-vertical-start-sharp-fill",
	});
}

export default Component;
