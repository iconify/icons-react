import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/y/y6o4wwblv.css';
import '../../css/l/ludqb8kbt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="y6o4wwblv"/><path class="ludqb8kbt"/></g>`,
		"fallback": "tabler:chart-pie-4",
	});
}

export default Component;
