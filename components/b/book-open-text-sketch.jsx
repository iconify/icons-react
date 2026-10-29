import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/u/u4i1h5rnw.css';
import '../../css/h/hojxk-buu.css';
import '../../css/m/marbhb1xt.css';
import '../../css/b/bc4_-ymjz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="u4i1h5rnw"/><path class="hojxk-buu wm-k"/><path class="marbhb1xt wm-k"/><path class="bc4_-ymjz wm-a"/></g>`,
		"fallback": "withicons:book-open-text-sketch",
	});
}

export default Component;
