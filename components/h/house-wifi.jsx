import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/r/r0duf20se.css';
import '../../css/q/qc-qo0m-p.css';
import '../../css/z/zj7k2wm3l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="r0duf20se"/><path class="qc-qo0m-p"/><path class="zj7k2wm3l"/></g>`,
		"fallback": "lucide:house-wifi",
	});
}

export default Component;
