import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/u/ufrhtcc_x.css';
import '../../css/m/myc-tnu3t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="ufrhtcc_x"/><path class="myc-tnu3t"/></g>`,
		"fallback": "tabler:frustum-off",
	});
}

export default Component;
