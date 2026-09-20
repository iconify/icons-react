import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/c/cdi5gyd-n.css';
import '../../css/q/qp8s2bcfn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="cdi5gyd-n"/><path class="qp8s2bcfn"/></g>`,
		"fallback": "keyline-icons:arrow-up-right-dashed-panel-two-tone",
	});
}

export default Component;
