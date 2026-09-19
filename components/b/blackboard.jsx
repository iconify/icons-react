import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufeehvblu.css';
import '../../css/p/p-amvacrb.css';
import '../../css/d/d0ox-ub5d.css';
import '../../css/p/pjdrmmvmh.css';
import '../../css/o/o2cr2ybri.css';
import '../../css/x/xjdbyrbde.css';
import '../../css/g/ghxp5qymf.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ufeehvblu"><rect class="p-amvacrb"/><path class="d0ox-ub5d"/><path class="pjdrmmvmh"/><path class="o2cr2ybri"/><path class="xjdbyrbde"/><path class="ghxp5qymf"/></g>`,
		"fallback": "icon-park:blackboard",
	});
}

export default Component;
