import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/j/jgczzeg9g.css';
import '../../css/f/fewwuidru.css';
import '../../css/m/mla55mb0k.css';
import '../../css/j/jxozh2_lw.css';
import '../../css/d/d3y9mw6db.css';
import '../../css/n/nl0-prb2p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="jgczzeg9g"/><path class="fewwuidru wm-a"/><path class="mla55mb0k wm-a"/><path class="jxozh2_lw"/><path class="d3y9mw6db"/><path class="nl0-prb2p wm-a"/></g>`,
		"fallback": "withicons:avatar-woman-bob-duo",
	});
}

export default Component;
