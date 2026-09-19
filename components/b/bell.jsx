import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/p/p9t7-acdo.css';
import '../../css/u/utoav36ff.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="p9t7-acdo"/><path class="utoav36ff"/></g>`,
		"fallback": "akar-icons:bell",
	});
}

export default Component;
