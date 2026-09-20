import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/l/lbdagjb_m.css';
import '../../css/i/ii7msgbpq.css';
import '../../css/b/bl94syvto.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="lbdagjb_m"/><path class="ii7msgbpq"/><path class="bl94syvto"/></g>`,
		"fallback": "streamline:camera-square",
	});
}

export default Component;
