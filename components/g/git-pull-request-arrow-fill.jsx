import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/t/ttid3ebll.css';
import '../../css/c/c8xmd3p7d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="ttid3ebll"/><path class="c8xmd3p7d"/></g>`,
		"fallback": "keyline-icons:git-pull-request-arrow-fill",
	});
}

export default Component;
