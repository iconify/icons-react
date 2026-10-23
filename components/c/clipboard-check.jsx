import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/b/bqt2b3bpv.css';
import '../../css/k/kgi4f2boh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="bqt2b3bpv"/><path class="kgi4f2boh"/></g>`,
		"fallback": "vadivam:clipboard-check",
	});
}

export default Component;
