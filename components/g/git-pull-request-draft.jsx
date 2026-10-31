import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/r/rrioiyb3a.css';
import '../../css/y/ywxzv4aty.css';
import '../../css/h/h18lq-uwn.css';
import '../../css/t/to6psxsai.css';
import '../../css/d/dzy0ndbdi.css';
import '../../css/e/edrjjbbnc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="rrioiyb3a wm-shadow"/><path class="wm-shadow ywxzv4aty"/><path class="h18lq-uwn"/><path class="to6psxsai"/><path class="dzy0ndbdi"/><path class="edrjjbbnc"/></g>`,
		"fallback": "withicons-brutal:git-pull-request-draft",
	});
}

export default Component;
