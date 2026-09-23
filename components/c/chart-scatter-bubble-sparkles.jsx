import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/y/yc13qrljd.css';
import '../../css/b/bvxu11eox.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="yc13qrljd"/><path class="bvxu11eox"/></g>`,
		"fallback": "keyline-icons:chart-scatter-bubble-sparkles",
	});
}

export default Component;
