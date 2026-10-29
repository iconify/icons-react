import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/r/rpmey2a0g.css';
import '../../css/x/xfesacccb.css';
import '../../css/x/xvnpp41vf.css';
import '../../css/w/wriinthhj.css';
import '../../css/y/yyupq3dqg.css';
import '../../css/a/aofn48bkl.css';
import '../../css/c/c3_kuonqm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="rpmey2a0g wm-shadow"/><path class="wm-k xfesacccb"/><path class="wm-k xvnpp41vf"/><path class="wm-a wriinthhj"/><path class="wm-a yyupq3dqg"/><path class="aofn48bkl wm-a"/><path class="c3_kuonqm wm-a"/></g>`,
		"fallback": "withicons:avatar-older-man-engrave",
	});
}

export default Component;
