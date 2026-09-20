import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/i/iwd1zdb1v.css';
import '../../css/c/c5yb8bdcb.css';
import '../../css/p/pcr6xabis.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="iwd1zdb1v"/><path class="c5yb8bdcb"/><path class="pcr6xabis"/></g>`,
		"fallback": "keyline-icons:circle-alert-duotone",
	});
}

export default Component;
