import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k9ocb_3pg.css';
import '../../css/v/v37387b4w.css';
import '../../css/m/mgi3rxh7g.css';
import '../../css/j/j_p5shbje.css';
import '../../css/m/mazp7j2aa.css';
import '../../css/p/pc_e58bev.css';
import '../../css/f/fkwkribsr.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="k9ocb_3pg"/><path class="v37387b4w"/><path clip-rule="evenodd" class="mgi3rxh7g"/><path class="j_p5shbje"/><path clip-rule="evenodd" class="mazp7j2aa"/><path class="pc_e58bev"/><path class="fkwkribsr"/></g>`,
		"fallback": "glyphs:chart-bar-1-bold",
	});
}

export default Component;
