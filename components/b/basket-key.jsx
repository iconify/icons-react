import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/y/y__9fy_8j.css';
import '../../css/g/g41jcv7ra.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="y__9fy_8j"/><path class="g41jcv7ra"/></g>`,
		"fallback": "tabler:basket-key",
	});
}

export default Component;
