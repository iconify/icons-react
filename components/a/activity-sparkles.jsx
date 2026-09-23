import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/c/chpjlr67g.css';
import '../../css/k/kpjml3bby.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="chpjlr67g"/><path class="kpjml3bby"/></g>`,
		"fallback": "keyline-icons:activity-sparkles",
	});
}

export default Component;
