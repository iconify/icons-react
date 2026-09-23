import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/o/ovcoi1b5v.css';
import '../../css/z/zk3p-0b1p.css';
import '../../css/n/njsvdyp0i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="ovcoi1b5v"/><path class="zk3p-0b1p"/><path class="njsvdyp0i"/></g>`,
		"fallback": "keyline-icons:cpu-sparkles-duotone",
	});
}

export default Component;
