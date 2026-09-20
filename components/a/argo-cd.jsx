import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c6rd_g1hu.css';
import '../../css/a/aviw83a_w.css';
import '../../css/h/huip79bno.css';
import '../../css/e/evi26cc4n.css';
import '../../css/v/vaduxebzz.css';
import '../../css/d/d7r64cbwt.css';
import '../../css/k/k9sgnzb3f.css';
import '../../css/v/ve1pmraqm.css';
import '../../css/h/hb6hk9s0v.css';
import '../../css/j/jrlbx4syp.css';
import '../../css/n/nmlgm8bmi.css';
import '../../css/y/yccz2qbzk.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<linearGradient id="SVGnbI3jbPD" x1="216.983" x2="300.476" y1="457.022" y2="170.118" gradientTransform="matrix(1 0 0 -1 0 514)" gradientUnits="userSpaceOnUse"><stop offset="0" class="c6rd_g1hu"/><stop offset="1" class="aviw83a_w"/></linearGradient><circle fill="url(#SVGnbI3jbPD)" class="huip79bno"/><path class="evi26cc4n"/><path class="vaduxebzz"/><path class="d7r64cbwt"/><path class="k9sgnzb3f"/><path class="ve1pmraqm"/><circle class="hb6hk9s0v"/><path class="jrlbx4syp"/><path class="nmlgm8bmi"/><path class="yccz2qbzk"/>`,
		"fallback": "selfhst:argo-cd",
	});
}

export default Component;
