import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/q/qvba41bsr.css';
import '../../css/c/c2xtjhb4x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="qvba41bsr"/><path class="c2xtjhb4x"/></g>`,
		"fallback": "keyline-icons:git-pull-request-plus-fill",
	});
}

export default Component;
