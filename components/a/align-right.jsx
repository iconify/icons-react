import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pp783-bfu.css';
import '../../css/l/lq81icb7y.css';
import '../../css/z/zb21h_bnu.css';
import '../../css/c/cb3ao20mc.css';
import '../../css/v/vicc33bvr.css';
import '../../css/a/azx2d2tww.css';
import '../../css/k/k1wv9hbfy.css';
import '../../css/n/nuah93wvy.css';
import '../../css/c/c6dton0rk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><radialGradient id="SVG2hoO7baC" cx="12" cy="13.4" r="13.2" fx="8.8" fy="8.8" gradientUnits="userSpaceOnUse"><stop offset="0" class="pp783-bfu"/><stop offset=".45" class="pp783-bfu"/><stop offset="1" class="lq81icb7y"/></radialGradient><radialGradient id="SVGedWudcVD" cx="12" cy="12.5" r="10.5" gradientUnits="userSpaceOnUse"><stop offset="0" class="zb21h_bnu"/><stop offset=".55" class="cb3ao20mc"/><stop offset="1" class="vicc33bvr"/></radialGradient></defs><path fill="url(#SVGedWudcVD)" class="azx2d2tww wm-deco"/><path class="k1wv9hbfy wm-shadow"/><path fill="url(#SVG2hoO7baC)" class="nuah93wvy wm-k"/><path class="c6dton0rk wm-shine"/></g>`,
		"fallback": "withicons-halloween:align-right",
	});
}

export default Component;
