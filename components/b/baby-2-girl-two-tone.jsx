import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/q/qaz9ngb0m.css';
import '../../css/a/a5plrmo6p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="qaz9ngb0m"/><path class="a5plrmo6p"/></g>`,
		"fallback": "keyline-icons:baby-2-girl-two-tone",
	});
}

export default Component;
