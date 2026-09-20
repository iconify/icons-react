import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/y/yh8y9p_ry.css';
import '../../css/q/qgl2-gcbd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="yh8y9p_ry"/><path class="qgl2-gcbd"/></g>`,
		"fallback": "tabler:home-exclamation",
	});
}

export default Component;
