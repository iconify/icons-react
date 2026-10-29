import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/z/z0a5jss7d.css';
import '../../css/p/pth4efu1a.css';
import '../../css/x/x47drlpiz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="z0a5jss7d"/><path class="pth4efu1a wm-k"/><path class="wm-a x47drlpiz"/></g>`,
		"fallback": "withicons:chart-bar-sketch",
	});
}

export default Component;
