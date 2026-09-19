import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/f1af3nhfj.css';
import '../../css/x/xtaqtob1c.css';
import '../../css/d/dw2ho37lk.css';
import '../../css/h/hzvq6-bcg.css';
import '../../css/y/yehh7qbie.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="f1af3nhfj"/><path class="xtaqtob1c"/><path class="dw2ho37lk"/><rect transform="rotate(30 21 4)" class="hzvq6-bcg"/><rect transform="rotate(30 13 17.856)" class="yehh7qbie"/></g>`,
		"fallback": "icon-park-outline:gavel",
	});
}

export default Component;
