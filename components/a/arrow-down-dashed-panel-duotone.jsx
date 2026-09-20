import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/o/ojh85yurv.css';
import '../../css/g/g9hlkrbzo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="ojh85yurv"/><path class="g9hlkrbzo"/></g>`,
		"fallback": "keyline-icons:arrow-down-dashed-panel-duotone",
	});
}

export default Component;
