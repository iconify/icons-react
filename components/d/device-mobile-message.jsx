import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/b/blminvtbg.css';
import '../../css/i/imucy6b8x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="blminvtbg"/><path class="imucy6b8x"/></g>`,
		"fallback": "tabler:device-mobile-message",
	});
}

export default Component;
