import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/p/pyif9ibav.css';
import '../../css/p/pek5b3bur.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="pyif9ibav"/><path class="pek5b3bur"/></g>`,
		"fallback": "tabler:certificate-off",
	});
}

export default Component;
