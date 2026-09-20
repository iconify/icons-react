import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/s/s0nmlsbuk.css';
import '../../css/v/v3b7x2xyv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="s0nmlsbuk"/><path class="v3b7x2xyv"/></g>`,
		"fallback": "keyline-icons:hand-pointer-duotone",
	});
}

export default Component;
