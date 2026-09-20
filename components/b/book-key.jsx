import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/p/pg9-r_u-m.css';
import '../../css/y/yde7g9buw.css';
import '../../css/n/nf7km2abx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="pg9-r_u-m"/><path class="yde7g9buw"/><circle class="nf7km2abx"/></g>`,
		"fallback": "lucide:book-key",
	});
}

export default Component;
