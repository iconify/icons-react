import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/y/yh2__cbci.css';
import '../../css/e/esxjnr1me.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="yh2__cbci"/><path class="esxjnr1me"/></g>`,
		"fallback": "vadivam:bookmark-check",
	});
}

export default Component;
