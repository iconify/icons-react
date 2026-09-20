import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/n/nnzq1t7sf.css';
import '../../css/k/k-ounkbqn.css';
import '../../css/o/omm4cnd4m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="nnzq1t7sf"/><path class="k-ounkbqn"/><path class="omm4cnd4m"/></g>`,
		"fallback": "tabler:cart-heart",
	});
}

export default Component;
