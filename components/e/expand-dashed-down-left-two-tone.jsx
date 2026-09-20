import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/c/cwab05iss.css';
import '../../css/x/xw9tycbcv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="cwab05iss"/><path class="xw9tycbcv"/></g>`,
		"fallback": "keyline-icons:expand-dashed-down-left-two-tone",
	});
}

export default Component;
