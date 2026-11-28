import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ywxrjvbnt.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/m/mzz31hbow.css';
import '../../css/m/mcuywwbzn.css';
import '../../css/l/lev6fvbik.css';
import '../../css/c/cfkicbk9n.css';
import '../../css/b/bpuppl-mf.css';
import '../../css/e/egsf2qknz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="secondary ywxrjvbnt"/><g class="dt0cm9dhy primary"><path class="mzz31hbow"/><path class="mcuywwbzn"/><path class="lev6fvbik"/><path class="cfkicbk9n"/><path class="bpuppl-mf"/><path class="egsf2qknz"/></g>`,
		"fallback": "iconaut:git-graph-duo",
	});
}

export default Component;
