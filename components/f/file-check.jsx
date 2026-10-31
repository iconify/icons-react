import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fqk8mibcy.css';
import '../../css/y/yfymn2bvd.css';
import '../../css/f/fl-xqkb5w.css';
import '../../css/e/euvbcybgq.css';
import '../../css/i/id6c12fxw.css';
import '../../css/s/scm2hcbtg.css';
import '../../css/z/zgm_s0o7v.css';
import '../../css/p/pya6h4bhu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGdSVONocx" x1="9" x2="15" y1="1.51" y2="22.5" gradientUnits="userSpaceOnUse"><stop offset="0" class="fqk8mibcy"/><stop offset="1" class="yfymn2bvd"/></linearGradient></defs><path fill="url(#SVGdSVONocx)" class="fl-xqkb5w"/><path class="euvbcybgq wm-shine"/><path class="id6c12fxw wm-shine"/><path class="scm2hcbtg wm-shine"/><path class="wm-shine zgm_s0o7v"/><path class="pya6h4bhu wm-shine"/></g>`,
		"fallback": "withicons-utsav:file-check",
	});
}

export default Component;
