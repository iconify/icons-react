import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j7fmnlb4r.css';
import '../../css/s/sxk5ihsqw.css';
import '../../css/u/usexkimfn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="j7fmnlb4r"><path class="sxk5ihsqw"/><path class="usexkimfn"/></g>`,
		"fallback": "reicon:bezier2",
	});
}

export default Component;
