import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/t/ta0a1y2ig.css';
import '../../css/b/b_4-fnztj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="ta0a1y2ig"/><path class="b_4-fnztj"/></g>`,
		"fallback": "tabler:arrow-merge",
	});
}

export default Component;
