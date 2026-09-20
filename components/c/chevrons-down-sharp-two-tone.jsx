import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/q/qc-yth18w.css';
import '../../css/u/ug019ubuu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="qc-yth18w"/><path class="ug019ubuu"/></g>`,
		"fallback": "keyline-icons:chevrons-down-sharp-two-tone",
	});
}

export default Component;
