import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/v/vpyvtnijy.css';
import '../../css/q/qo3g9rbnz.css';
import '../../css/f/f9hb40bmj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="vpyvtnijy"/><path clip-rule="evenodd" class="qo3g9rbnz"/><path class="f9hb40bmj"/></g>`,
		"fallback": "keyline-icons:file-type-sharp-duotone",
	});
}

export default Component;
