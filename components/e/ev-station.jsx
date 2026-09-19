import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/p/p3wj74wpx.css';
import '../../css/f/fy32lnbdn.css';
import '../../css/e/esn5smbra.css';
import '../../css/g/gawt1xbko.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="p3wj74wpx"/><path class="fy32lnbdn"/><path class="esn5smbra"/><path class="gawt1xbko"/></g>`,
		"fallback": "iconoir:ev-station",
	});
}

export default Component;
