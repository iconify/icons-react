import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/f/f7t9t-riv.css';
import '../../css/h/hrtwnjawz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="f7t9t-riv"/><path class="hrtwnjawz"/></g>`,
		"fallback": "tabler:brand-alipay",
	});
}

export default Component;
