import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/a/a-stkacat.css';
import '../../css/e/e3cq9e-5w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="a-stkacat"/><path class="e3cq9e-5w"/></g>`,
		"fallback": "akar-icons:double-sword",
	});
}

export default Component;
