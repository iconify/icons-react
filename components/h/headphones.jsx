import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/y/yryt5abxb.css';
import '../../css/e/el63bhkyk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="yryt5abxb"/><path class="el63bhkyk"/></g>`,
		"fallback": "tabler:headphones",
	});
}

export default Component;
