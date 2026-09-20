import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/l/lrsmktbfe.css';
import '../../css/r/rsy5g76ue.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="lrsmktbfe"/><path class="rsy5g76ue"/></g>`,
		"fallback": "keyline-icons:caret-right-sharp-two-tone",
	});
}

export default Component;
