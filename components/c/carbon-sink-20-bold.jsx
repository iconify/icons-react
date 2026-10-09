import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zlrq1pb6a.css';
import '../../css/q/qiqf2wm_a.css';
import '../../css/a/artzn1ocz.css';
import '../../css/m/mlxt40bpy.css';
import '../../css/n/nw-12wbkf.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zlrq1pb6a"/><path class="qiqf2wm_a"/><path class="artzn1ocz"/><path class="mlxt40bpy"/><path class="nw-12wbkf"/>`,
		"fallback": "energy-icons:carbon-sink-20-bold",
	});
}

export default Component;
