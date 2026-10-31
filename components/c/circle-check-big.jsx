import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/w/wvpm67bpu.css';
import '../../css/c/cpv7ar0hg.css';
import '../../css/u/ucexqlbld.css';
import '../../css/l/lqaowcb_j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="wvpm67bpu"/><path class="cpv7ar0hg wm-shine"/><path class="ucexqlbld wm-k"/><path class="lqaowcb_j wm-a"/></g>`,
		"fallback": "withicons-kawaii:circle-check-big",
	});
}

export default Component;
