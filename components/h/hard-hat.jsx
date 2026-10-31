import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sv0c39bkq.css';
import '../../css/o/ot_1jemuk.css';
import '../../css/i/ig16-xoye.css';
import '../../css/i/i59gpbx2w.css';
import '../../css/t/teui0-85x.css';
import '../../css/w/wkmne8bvn.css';
import '../../css/j/jp6f8f1jc.css';
import '../../css/s/s-t_uib9c.css';
import '../../css/a/aiv38lpch.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGN1oYpimo" x1="10" x2="14" y1="3.5" y2="20.5" gradientUnits="userSpaceOnUse"><stop offset="0" class="sv0c39bkq"/><stop offset=".4" class="sv0c39bkq"/><stop offset="1" class="ot_1jemuk"/></linearGradient></defs><path class="ig16-xoye wm-k"/><path class="i59gpbx2w wm-deco"/><path class="teui0-85x wm-k"/><path fill="url(#SVGN1oYpimo)" class="wkmne8bvn wm-k"/><path class="jp6f8f1jc wm-shadow"/><path class="s-t_uib9c wm-shine"/><path class="aiv38lpch wm-shine"/></g>`,
		"fallback": "withicons-valentine:hard-hat",
	});
}

export default Component;
