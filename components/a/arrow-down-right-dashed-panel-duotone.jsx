import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/o/ojh85yurv.css';
import '../../css/h/h5xvq-byq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="ojh85yurv"/><path class="h5xvq-byq"/></g>`,
		"fallback": "keyline-icons:arrow-down-right-dashed-panel-duotone",
	});
}

export default Component;
