import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/l/lsob41b4d.css';
import '../../css/n/n1_uotg6o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="lsob41b4d"/><path class="n1_uotg6o"/></g>`,
		"fallback": "vadivam:alarm-clock-check",
	});
}

export default Component;
