import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/p/p8iscc2_d.css';
import '../../css/n/nrc4mt3ai.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="p8iscc2_d"/><path class="nrc4mt3ai"/></g>`,
		"fallback": "struq:folder-export",
	});
}

export default Component;
