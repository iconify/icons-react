import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mfo2ztank.css';
import '../../css/v/vrwg7cc1q.css';
import '../../css/p/pvgm91boz.css';
import '../../css/s/s6zdafb6y.css';
import '../../css/q/qcfedpaod.css';
import '../../css/n/nu1gr0hth.css';
import '../../css/k/khpmypvdb.css';
import '../../css/x/xgs51yznj.css';
import '../../css/d/d2hv79b3a.css';
import '../../css/f/fh7746n4k.css';
import '../../css/f/fjrr-rbdo.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mfo2ztank"/><g class="vrwg7cc1q"><circle class="pvgm91boz"/><path class="s6zdafb6y"/><g class="qcfedpaod"><path class="nu1gr0hth"/><path class="khpmypvdb"/><path class="xgs51yznj"/></g><g class="qcfedpaod"><path class="d2hv79b3a"/><path class="fh7746n4k"/><path class="fjrr-rbdo"/></g></g>`,
		"fallback": "openmoji:face-with-spiral-eyes",
	});
}

export default Component;
