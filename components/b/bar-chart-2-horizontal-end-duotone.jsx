import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/i/i0tm_6p0q.css';
import '../../css/b/bvpe1-nac.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="i0tm_6p0q"/><path class="bvpe1-nac"/></g>`,
		"fallback": "keyline-icons:bar-chart-2-horizontal-end-duotone",
	});
}

export default Component;
