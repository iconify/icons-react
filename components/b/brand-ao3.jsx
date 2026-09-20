import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/u/u9cc3dbxr.css';
import '../../css/z/z5r5j9b0r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="u9cc3dbxr"/><path class="z5r5j9b0r"/></g>`,
		"fallback": "tabler:brand-ao3",
	});
}

export default Component;
