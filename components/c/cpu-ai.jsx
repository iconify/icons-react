import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/x/x6it0dbxl.css';
import '../../css/a/ares4u2vu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="x6it0dbxl"/><rect class="ares4u2vu"/></g>`,
		"fallback": "lucide:cpu-ai",
	});
}

export default Component;
