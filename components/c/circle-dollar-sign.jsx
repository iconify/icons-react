import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/f31j-cpil.css';
import '../../css/q/qot46_b6w.css';
import '../../css/c/cy53u9bgb.css';
import '../../css/r/rjg00-qxz.css';
import '../../css/u/uzr6ak_6j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="f31j-cpil wm-k"/><path class="qot46_b6w wm-k"/><path class="cy53u9bgb wm-k"/><path class="rjg00-qxz wm-shine"/><path class="uzr6ak_6j wm-a"/></g>`,
		"fallback": "withicons-anime:circle-dollar-sign",
	});
}

export default Component;
