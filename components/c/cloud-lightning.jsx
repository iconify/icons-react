import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j7fmnlb4r.css';
import '../../css/q/qm5hnkttd.css';
import '../../css/h/h5yug9bgx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="j7fmnlb4r"><path class="qm5hnkttd"/><path class="h5yug9bgx"/></g>`,
		"fallback": "reicon:cloud-lightning",
	});
}

export default Component;
