import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/n/ngezjftiy.css';
import '../../css/v/vbakllcin.css';
import '../../css/j/j1rrsfb2p.css';
import '../../css/g/g3cpwtupq.css';
import '../../css/f/ff8ix3a1v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="ngezjftiy wm-a"/><path class="vbakllcin wm-k"/><path class="j1rrsfb2p wm-k"/><path class="g3cpwtupq wm-a"/><path class="ff8ix3a1v wm-k"/></g>`,
		"fallback": "withicons:chart-area-sketch",
	});
}

export default Component;
