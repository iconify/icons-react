import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/baxm99e_z.css';
import '../../css/y/yh4tuubpl.css';
import '../../css/j/jn8qy4bru.css';
import '../../css/s/seg49pw1p.css';
import '../../css/l/lk5yackzj.css';
import '../../css/z/z4cxhgb-d.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="baxm99e_z"/><path class="yh4tuubpl"/><g class="jn8qy4bru"><path class="seg49pw1p"/><path class="lk5yackzj"/></g><path class="z4cxhgb-d"/>`,
		"fallback": "openmoji:earache",
	});
}

export default Component;
