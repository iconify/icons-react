import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/w/wena4ilcp.css';
import '../../css/l/lmegi90tj.css';
import '../../css/k/kwfnbbc6d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="wena4ilcp"/><path class="lmegi90tj"/><path class="kwfnbbc6d"/></g>`,
		"fallback": "hugeicons:co-present",
	});
}

export default Component;
