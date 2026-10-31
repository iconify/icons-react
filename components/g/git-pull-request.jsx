import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/v/vn9btab9e.css';
import '../../css/a/af34vhfpw.css';
import '../../css/h/h18lq-uwn.css';
import '../../css/t/to6psxsai.css';
import '../../css/d/dzy0ndbdi.css';
import '../../css/l/lkbb3qb2g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="vn9btab9e wm-shadow"/><path class="af34vhfpw wm-shadow"/><path class="h18lq-uwn"/><path class="to6psxsai"/><path class="dzy0ndbdi"/><path class="lkbb3qb2g"/></g>`,
		"fallback": "withicons-brutal:git-pull-request",
	});
}

export default Component;
