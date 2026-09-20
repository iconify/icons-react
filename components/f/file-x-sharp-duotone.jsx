import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/w/w5c8y-14a.css';
import '../../css/g/g6hnddcux.css';
import '../../css/a/aa5s-gbfn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="w5c8y-14a"/><path clip-rule="evenodd" class="g6hnddcux"/><path class="aa5s-gbfn"/></g>`,
		"fallback": "keyline-icons:file-x-sharp-duotone",
	});
}

export default Component;
