import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/q/qzij2dzed.css';
import '../../css/e/e2eapccqt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="qzij2dzed"/><path class="e2eapccqt"/></g>`,
		"fallback": "withicons-retro:indent-increase",
	});
}

export default Component;
