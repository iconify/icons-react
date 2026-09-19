import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/g/g0pf61plc.css';
import '../../css/f/fwl6ucbbe.css';
import '../../css/b/bjxwieloe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="g0pf61plc"/><path class="fwl6ucbbe"/><path class="bjxwieloe"/></g>`,
		"fallback": "hugeicons:camera-microphone-01",
	});
}

export default Component;
