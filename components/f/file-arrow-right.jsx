import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/h/hqcq3__zz.css';
import '../../css/c/co2ijq2fq.css';
import '../../css/h/hud37_9is.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="hqcq3__zz"/><path class="co2ijq2fq"/><path class="hud37_9is"/></g>`,
		"fallback": "tabler:file-arrow-right",
	});
}

export default Component;
