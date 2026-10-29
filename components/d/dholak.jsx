import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/a/aigr9vb-k.css';
import '../../css/m/mer_ybfqj.css';
import '../../css/v/va9mwjbzo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="aigr9vb-k"/><path class="mer_ybfqj"/><path class="va9mwjbzo"/></g>`,
		"fallback": "withicons-bauhaus:dholak",
	});
}

export default Component;
