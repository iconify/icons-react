import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/f/fg3_ue5-m.css';
import '../../css/d/d_z2v9ejq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="fg3_ue5-m"/><path class="d_z2v9ejq"/></g>`,
		"fallback": "keyline-icons:hand-pointer-down-two-tone",
	});
}

export default Component;
