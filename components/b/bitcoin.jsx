import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pp783-bfu.css';
import '../../css/l/lq81icb7y.css';
import '../../css/u/urdsoyirw.css';
import '../../css/k/klalqjb5s.css';
import '../../css/j/j10y_sbul.css';
import '../../css/k/k_sq1bc2u.css';
import '../../css/v/vicc33bvr.css';
import '../../css/a/azx2d2tww.css';
import '../../css/x/x-fe0wpjg.css';
import '../../css/z/zzjwyesvl.css';
import '../../css/q/qar3vtecb.css';
import '../../css/v/vevguwbbf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><radialGradient id="SVGKnKNubPr" cx="10.87" cy="13.68" r="13.86" fx="8.51" fy="8.22" gradientUnits="userSpaceOnUse"><stop offset="0" class="pp783-bfu"/><stop offset=".45" class="pp783-bfu"/><stop offset="1" class="lq81icb7y"/></radialGradient><radialGradient id="SVGstITvbGs" cx="10.87" cy="14.1" r="13.02" gradientUnits="userSpaceOnUse"><stop offset="0" class="urdsoyirw"/><stop offset=".5" class="klalqjb5s"/><stop offset="1" class="pp783-bfu"/></radialGradient><radialGradient id="SVGt5uZjdGq" cx="10.87" cy="13.05" r="12" gradientUnits="userSpaceOnUse"><stop offset="0" class="j10y_sbul"/><stop offset=".55" class="k_sq1bc2u"/><stop offset="1" class="vicc33bvr"/></radialGradient></defs><path fill="url(#SVGt5uZjdGq)" class="azx2d2tww wm-deco"/><path class="wm-shadow x-fe0wpjg"/><path fill="url(#SVGstITvbGs)" class="wm-shine zzjwyesvl"/><path fill="url(#SVGKnKNubPr)" class="qar3vtecb wm-k"/><path class="vevguwbbf wm-shine"/></g>`,
		"fallback": "withicons-halloween:bitcoin",
	});
}

export default Component;
