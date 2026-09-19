import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/c/cv6iqoa1s.css';
import '../../css/c/c-vtk3_ct.css';
import '../../css/r/r92yvb8vr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="cv6iqoa1s"/><path class="c-vtk3_ct"/><path class="r92yvb8vr"/></g>`,
		"fallback": "hugeicons:flow-connection",
	});
}

export default Component;
