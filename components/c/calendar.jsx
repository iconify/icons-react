import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufeehvblu.css';
import '../../css/l/ljk2r9bvb.css';
import '../../css/m/mfmssve2r.css';
import '../../css/c/cw48r1g7l.css';
import '../../css/o/o95lhhbaw.css';
import '../../css/l/lj5m0mb2p.css';
import '../../css/h/hbc3vj2lp.css';
import '../../css/i/im1tyjd8s.css';
import '../../css/f/f0yygl-7s.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ufeehvblu"><path class="ljk2r9bvb"/><path class="mfmssve2r"/><path class="cw48r1g7l"/><path class="o95lhhbaw"/><path class="lj5m0mb2p"/><path class="hbc3vj2lp"/><path class="im1tyjd8s"/><path class="f0yygl-7s"/></g>`,
		"fallback": "icon-park:calendar",
	});
}

export default Component;
