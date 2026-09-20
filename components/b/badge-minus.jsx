import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/x/xgaf0nbdt.css';
import '../../css/x/xn4zvpbmt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="xgaf0nbdt"/><path class="xn4zvpbmt"/></g>`,
		"fallback": "keyline-icons:badge-minus",
	});
}

export default Component;
