import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/g/g1en6s9ki.css';
import '../../css/i/i1w9302al.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="g1en6s9ki"/><path class="i1w9302al"/></g>`,
		"fallback": "tabler:brand-revolut",
	});
}

export default Component;
