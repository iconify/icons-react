import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k2u665ban.css';
import '../../css/f/f362y_zux.css';
import '../../css/c/cz2mscbhh.css';
import '../../css/k/kbl16hb_i.css';
import '../../css/l/luord742c.css';
import '../../css/e/ekwplfbaw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="k2u665ban"><path class="f362y_zux"/><path class="cz2mscbhh"/><path class="kbl16hb_i"/><path class="luord742c"/><path class="ekwplfbaw"/></g>`,
		"fallback": "iconoir:emoji-sing-left-note",
	});
}

export default Component;
