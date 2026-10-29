import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/d/d10hbub1w.css';
import '../../css/f/fgaqfsbrg.css';
import '../../css/r/rbzq4bjzv.css';
import '../../css/u/upo-s0b7i.css';
import '../../css/a/a5a-k4i1y.css';
import '../../css/f/fih8cdb5x.css';
import '../../css/v/vildi5bvg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="d10hbub1w wm-deco"/><path class="fgaqfsbrg wm-deco"/><path class="rbzq4bjzv wm-deco"/><path class="upo-s0b7i wm-k"/><path class="a5a-k4i1y wm-a"/><path class="fih8cdb5x wm-k"/><path class="vildi5bvg wm-a"/></g>`,
		"fallback": "withicons:avatar-man-blueprint",
	});
}

export default Component;
