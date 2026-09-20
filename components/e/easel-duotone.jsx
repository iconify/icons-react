import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/e/esayqubgy.css';
import '../../css/y/yp25-fb0x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="esayqubgy"/><path class="yp25-fb0x"/></g>`,
		"fallback": "keyline-icons:easel-duotone",
	});
}

export default Component;
