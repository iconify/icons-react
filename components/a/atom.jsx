import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/g/ggctjbb5v.css';
import '../../css/y/y4zsojbvb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="ggctjbb5v"/><path class="y4zsojbvb"/></g>`,
		"fallback": "tabler:atom",
	});
}

export default Component;
