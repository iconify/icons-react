import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/h/hqcq3__zz.css';
import '../../css/y/yfhfo1bxr.css';
import '../../css/q/qskgxxbmy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="hqcq3__zz"/><path class="yfhfo1bxr"/><path class="qskgxxbmy"/></g>`,
		"fallback": "tabler:file-download",
	});
}

export default Component;
