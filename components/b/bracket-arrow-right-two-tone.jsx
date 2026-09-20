import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/h/h_cr2obrq.css';
import '../../css/x/xh69ljbkl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="h_cr2obrq"/><path class="xh69ljbkl"/></g>`,
		"fallback": "keyline-icons:bracket-arrow-right-two-tone",
	});
}

export default Component;
