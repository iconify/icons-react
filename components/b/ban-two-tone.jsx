import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/g/g2u3clbzs.css';
import '../../css/j/j220zebnc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="g2u3clbzs"/><path class="j220zebnc"/></g>`,
		"fallback": "keyline-icons:ban-two-tone",
	});
}

export default Component;
