import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/y/y-8a7dbrh.css';
import '../../css/k/kungq2u6q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="y-8a7dbrh"/><path class="kungq2u6q"/></g>`,
		"fallback": "tabler:chart-sankey",
	});
}

export default Component;
