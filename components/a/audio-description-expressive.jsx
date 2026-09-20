import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/i5_w3cbpv.css';
import '../../css/m/mao-10b4j.css';
import '../../css/v/v11yvdspi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="i5_w3cbpv"/><path clip-rule="evenodd" class="mao-10b4j"/><path class="v11yvdspi"/></g>`,
		"fallback": "nrk:audio-description-expressive",
	});
}

export default Component;
