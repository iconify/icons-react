import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/j/j-3fjrc2t.css';
import '../../css/q/qqzg8shoc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="j-3fjrc2t"/><path class="qqzg8shoc"/></g>`,
		"fallback": "keyline-icons:bird-fill",
	});
}

export default Component;
