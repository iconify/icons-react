import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/k/kk0-cgbnx.css';
import '../../css/v/vy3-83bqi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="kk0-cgbnx"/><path class="vy3-83bqi"/></g>`,
		"fallback": "tabler:helmet-off",
	});
}

export default Component;
