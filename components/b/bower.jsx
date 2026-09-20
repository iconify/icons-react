import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/btex_xbej.css';
import '../../css/g/ghmu72o6x.css';
import '../../css/c/c9boztbsg.css';
import '../../css/u/uqa7webya.css';
import '../../css/u/uubmou62f.css';
import '../../css/j/jq16phb9p.css';
import '../../css/u/unvvs_m7l.css';
import '../../css/s/s95b2_toj.css';
import '../../css/t/tt3i0ewnk.css';
import '../../css/z/zfp7d4bbj.css';

const viewBox = {"width":400,"height":400};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="btex_xbej"/><path class="ghmu72o6x"/><g transform="translate(10.989 32.73)scale(.81733)" class="c9boztbsg"><path class="uqa7webya"/><path class="uubmou62f"/><path class="jq16phb9p"/><path class="unvvs_m7l"/><path class="s95b2_toj"/><path class="tt3i0ewnk"/><ellipse class="zfp7d4bbj"/></g>`,
		"fallback": "material-icon-theme:bower",
	});
}

export default Component;
