import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/t/tx_ah59as.css';
import '../../css/z/zbbxh7p1c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="tx_ah59as"/><path class="zbbxh7p1c"/></g>`,
		"fallback": "keyline-icons:circle-arrow-up-left",
	});
}

export default Component;
