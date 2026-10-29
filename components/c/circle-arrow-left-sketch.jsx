import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/z/zy4827b2t.css';
import '../../css/x/x_vesxj5e.css';
import '../../css/x/xp6eksv1n.css';
import '../../css/t/thpiy8vsx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="zy4827b2t"/><path class="wm-k x_vesxj5e"/><path class="wm-a xp6eksv1n"/><path class="thpiy8vsx wm-a"/></g>`,
		"fallback": "withicons:circle-arrow-left-sketch",
	});
}

export default Component;
