import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j7fmnlb4r.css';
import '../../css/a/a4l3r_b1b.css';
import '../../css/y/yixxjjb7a.css';
import '../../css/h/ho51x7b-o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="j7fmnlb4r"><path class="a4l3r_b1b"/><path class="yixxjjb7a"/><path class="ho51x7b-o"/></g>`,
		"fallback": "reicon:cloud-sunny",
	});
}

export default Component;
