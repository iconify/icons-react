import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/z/zgkzi7bbb.css';
import '../../css/r/rehywqpdf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="zgkzi7bbb"/><path class="rehywqpdf"/></g>`,
		"fallback": "keyline-icons:cctv-off-two-tone",
	});
}

export default Component;
