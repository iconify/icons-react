import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/s/s0nmlsbuk.css';
import '../../css/s/sgn_4-b3d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="s0nmlsbuk"/><path class="sgn_4-b3d"/></g>`,
		"fallback": "keyline-icons:hand-pointer-two-tone",
	});
}

export default Component;
