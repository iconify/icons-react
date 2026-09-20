import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/e/ebm5oscgz.css';
import '../../css/z/zpkmj173e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="ebm5oscgz"/><path class="zpkmj173e"/></g>`,
		"fallback": "keyline-icons:caret-left-fill",
	});
}

export default Component;
