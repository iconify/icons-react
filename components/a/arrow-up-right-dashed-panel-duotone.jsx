import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/u/uzg8zabul.css';
import '../../css/l/l5u9526ot.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="uzg8zabul"/><path class="l5u9526ot"/></g>`,
		"fallback": "keyline-icons:arrow-up-right-dashed-panel-duotone",
	});
}

export default Component;
