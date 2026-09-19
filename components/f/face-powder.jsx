import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/f44j1yhyl.css';
import '../../css/u/ufjq7nq1l.css';
import '../../css/b/b79sxlbmk.css';
import '../../css/l/lnkhax4gl.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><ellipse class="f44j1yhyl"/><ellipse class="ufjq7nq1l"/><path class="b79sxlbmk"/><ellipse class="lnkhax4gl"/></g>`,
		"fallback": "icon-park-outline:face-powder",
	});
}

export default Component;
