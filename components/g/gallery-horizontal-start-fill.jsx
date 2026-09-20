import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/s/sl3coc4dw.css';
import '../../css/l/lcapyy5bh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="sl3coc4dw"/><path class="lcapyy5bh"/></g>`,
		"fallback": "keyline-icons:gallery-horizontal-start-fill",
	});
}

export default Component;
