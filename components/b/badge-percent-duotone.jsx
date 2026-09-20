import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/g/g70whwsdk.css';
import '../../css/r/r0knw1b4v.css';
import '../../css/b/btfg0oi0n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="g70whwsdk"/><path class="r0knw1b4v"/><path class="btfg0oi0n"/></g>`,
		"fallback": "keyline-icons:badge-percent-duotone",
	});
}

export default Component;
