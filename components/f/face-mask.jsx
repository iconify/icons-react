import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/p/pqhzlkrmx.css';
import '../../css/a/apt2o957m.css';
import '../../css/a/a6ey7sbng.css';
import '../../css/r/rvvxdgw4h.css';
import '../../css/w/w49ngccqq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="pqhzlkrmx"/><path class="apt2o957m wm-shine"/><path class="a6ey7sbng wm-k"/><path class="rvvxdgw4h wm-a"/><path class="w49ngccqq wm-deco"/></g>`,
		"fallback": "withicons-kawaii:face-mask",
	});
}

export default Component;
