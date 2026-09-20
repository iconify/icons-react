import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pi3vdnbck.css';
import '../../css/b/byal82bxd.css';

const viewBox = {"width":1503,"height":1504};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="pi3vdnbck"/><path clip-rule="evenodd" class="byal82bxd"/></g>`,
		"fallback": "thesvg-color:avalanche",
	});
}

export default Component;
