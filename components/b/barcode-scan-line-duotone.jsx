import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/y/yo7b8frfe.css';
import '../../css/f/f-3d8rbtb.css';
import '../../css/s/s6es03xrf.css';
import '../../css/i/i7y13bc4y.css';
import '../../css/b/btswapx3u.css';
import '../../css/b/bco3ug89k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="yo7b8frfe"/><path class="f-3d8rbtb"/><path class="s6es03xrf"/><path class="i7y13bc4y"/><path class="btswapx3u"/><path class="bco3ug89k"/></g>`,
		"fallback": "solar:barcode-scan-line-duotone",
	});
}

export default Component;
