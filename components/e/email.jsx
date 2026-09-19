import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bvwm3wm-l.css';
import '../../css/z/zgyoyfbth.css';
import '../../css/v/vsqobsshi.css';
import '../../css/x/xagkgcbsq.css';
import '../../css/j/jfn9918qi.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bvwm3wm-l"/><path class="zgyoyfbth"/><path class="vsqobsshi"/><path class="xagkgcbsq"/><path class="jfn9918qi"/>`,
		"fallback": "fxemoji:email",
	});
}

export default Component;
