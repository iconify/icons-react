import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/r/rq3_3vvtm.css';
import '../../css/x/xzau_vbuv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="rq3_3vvtm"/><path class="xzau_vbuv"/></g>`,
		"fallback": "keyline-icons:cable-two-tone",
	});
}

export default Component;
