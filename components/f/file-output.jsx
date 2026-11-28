import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/b/boz1ay-3b.css';
import '../../css/k/kmsp_pkak.css';
import '../../css/k/k2a380bdw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="boz1ay-3b"/><path class="kmsp_pkak"/><path class="k2a380bdw"/></g>`,
		"fallback": "lucide:file-output",
	});
}

export default Component;
