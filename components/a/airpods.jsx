import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j7fmnlb4r.css';
import '../../css/q/q92t2nk7r.css';
import '../../css/i/iolhn0crn.css';
import '../../css/j/jtcxpwb7j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="j7fmnlb4r"><path class="q92t2nk7r"/><path class="iolhn0crn"/><path class="jtcxpwb7j"/></g>`,
		"fallback": "reicon:airpods",
	});
}

export default Component;
