import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/c/cfnyxxbjf.css';
import '../../css/s/s-2n28bts.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="cfnyxxbjf"/><path class="s-2n28bts"/></g>`,
		"fallback": "lucide:heart-crack",
	});
}

export default Component;
