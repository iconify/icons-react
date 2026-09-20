import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/l/lj0iy4i-g.css';
import '../../css/w/we-n9xbbi.css';
import '../../css/l/lnl-rg5ys.css';
import '../../css/r/ra_w25bcm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="lj0iy4i-g"/><path class="we-n9xbbi"/><path class="lnl-rg5ys"/><path class="ra_w25bcm"/></g>`,
		"fallback": "streamline-freehand:file-code-c-plus-plus",
	});
}

export default Component;
