import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/n/nr2u32bxs.css';
import '../../css/d/d6l0zil6h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="nr2u32bxs"/><path class="d6l0zil6h"/></g>`,
		"fallback": "lucide:folder-input",
	});
}

export default Component;
