import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/n/n7c0f4b0z.css';
import '../../css/n/np2ollb3i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="n7c0f4b0z"/><path class="np2ollb3i"/></g>`,
		"fallback": "lucide:helicopter",
	});
}

export default Component;
