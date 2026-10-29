import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/b/bozexkkag.css';
import '../../css/w/wdmalj20d.css';
import '../../css/q/q1z_2oboi.css';
import '../../css/c/c4e2--9os.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="bozexkkag wm-k"/><path class="wdmalj20d wm-a"/><path class="q1z_2oboi wm-k"/><path class="c4e2--9os wm-a"/></g>`,
		"fallback": "withicons:arrow-down-sketch",
	});
}

export default Component;
