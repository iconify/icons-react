import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/p/pek8tr53z.css';
import '../../css/j/jmypdibrj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="pek8tr53z"/><path class="jmypdibrj"/></g>`,
		"fallback": "keyline-icons:git-branch-plus-fill",
	});
}

export default Component;
