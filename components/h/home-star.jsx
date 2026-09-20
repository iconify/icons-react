import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/n/n8i0dhb0l.css';
import '../../css/w/wfhhslbmp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="n8i0dhb0l"/><path class="wfhhslbmp"/></g>`,
		"fallback": "tabler:home-star",
	});
}

export default Component;
