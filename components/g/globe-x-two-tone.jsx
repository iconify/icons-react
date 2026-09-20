import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/k/k0aallhpc.css';
import '../../css/z/zyy673bgs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="k0aallhpc"/><path class="zyy673bgs"/></g>`,
		"fallback": "keyline-icons:globe-x-two-tone",
	});
}

export default Component;
