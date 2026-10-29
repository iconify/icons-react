import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/w/wo61f7b1d.css';
import '../../css/p/p_swgyb9q.css';
import '../../css/m/mrbdxivog.css';
import '../../css/j/jrm8jlzgh.css';
import '../../css/m/m5u5l5b7g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="wm-k wo61f7b1d"/><path class="p_swgyb9q wm-a"/><path class="mrbdxivog wm-shadow"/><path class="jrm8jlzgh wm-k"/><path class="m5u5l5b7g wm-a"/></g>`,
		"fallback": "withicons:drill-engrave",
	});
}

export default Component;
