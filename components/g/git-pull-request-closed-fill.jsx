import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/i/ihmsq2j2p.css';
import '../../css/j/jmypdibrj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="ihmsq2j2p"/><path class="jmypdibrj"/></g>`,
		"fallback": "keyline-icons:git-pull-request-closed-fill",
	});
}

export default Component;
