import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/b/bp-w5nx6c.css';
import '../../css/z/zp4-55bre.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="bp-w5nx6c"/><path class="zp4-55bre"/></g>`,
		"fallback": "keyline-icons:calendar-arrow-left-duotone",
	});
}

export default Component;
