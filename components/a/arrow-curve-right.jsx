import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/c/cf_gifb2d.css';
import '../../css/q/qdbu8bkji.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="cf_gifb2d"/><path class="qdbu8bkji"/></g>`,
		"fallback": "tabler:arrow-curve-right",
	});
}

export default Component;
