import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/e/enkfn-l3k.css';
import '../../css/v/vc3yhiryo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="enkfn-l3k"/><path class="vc3yhiryo"/></g>`,
		"fallback": "tabler:arrow-wave-left-up",
	});
}

export default Component;
