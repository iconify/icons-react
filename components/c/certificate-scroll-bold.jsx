import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/yz8-y-bjf.css';
import '../../css/p/pbnloebki.css';
import '../../css/r/rq_p60btc.css';
import '../../css/k/kxs5w7bqh.css';
import '../../css/u/unf9_kdmv.css';
import '../../css/u/u--uwsb8y.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="yz8-y-bjf"/><path class="pbnloebki"/><path class="rq_p60btc"/><path clip-rule="evenodd" class="kxs5w7bqh"/><path class="unf9_kdmv"/><path clip-rule="evenodd" class="u--uwsb8y"/></g>`,
		"fallback": "glyphs:certificate-scroll-bold",
	});
}

export default Component;
