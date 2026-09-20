import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jtowsomii.css';
import '../../css/m/mif2vhb3d.css';
import '../../css/i/i35t25ucf.css';
import '../../css/h/hjltgiuuu.css';

const viewBox = {"width":21,"height":21};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jtowsomii"><path class="mif2vhb3d"/><path class="i35t25ucf"/><path class="hjltgiuuu"/></g>`,
		"fallback": "system-uicons:graph-increase",
	});
}

export default Component;
