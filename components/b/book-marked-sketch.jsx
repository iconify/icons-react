import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/k/k55pnmbhe.css';
import '../../css/u/ur5jsv72p.css';
import '../../css/m/m0zc6tsaa.css';
import '../../css/m/m4umu-wtt.css';
import '../../css/w/w7oqhhkbx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="k55pnmbhe"/><path class="ur5jsv72p wm-k"/><path class="m0zc6tsaa wm-a"/><path class="m4umu-wtt wm-k"/><path class="w7oqhhkbx wm-a"/></g>`,
		"fallback": "withicons:book-marked-sketch",
	});
}

export default Component;
