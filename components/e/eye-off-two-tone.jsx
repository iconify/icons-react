import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/u/uch-0mb5e.css';
import '../../css/q/ql5fq_amm.css';
import '../../css/q/qkazn7bqy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="uch-0mb5e"/><path class="ql5fq_amm"/><path class="qkazn7bqy"/></g>`,
		"fallback": "keyline-icons:eye-off-two-tone",
	});
}

export default Component;
