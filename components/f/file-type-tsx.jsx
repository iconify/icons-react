import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/p/pxy-jccag.css';
import '../../css/i/i__eb0xll.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="pxy-jccag"/><path class="i__eb0xll"/></g>`,
		"fallback": "tabler:file-type-tsx",
	});
}

export default Component;
