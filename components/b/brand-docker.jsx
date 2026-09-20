import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/u/uq76zgbfo.css';
import '../../css/q/ql2enlb9x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="uq76zgbfo"/><path class="ql2enlb9x"/></g>`,
		"fallback": "tabler:brand-docker",
	});
}

export default Component;
