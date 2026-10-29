import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/y/yfhih8buv.css';
import '../../css/d/dto_k4bxp.css';
import '../../css/n/nfutsrbtc.css';
import '../../css/i/iz1poibor.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="yfhih8buv"/><path class="dto_k4bxp"/><path class="nfutsrbtc"/><path class="iz1poibor wm-a"/></g>`,
		"fallback": "withicons:dholak-duo",
	});
}

export default Component;
