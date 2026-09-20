import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/u/uboeh8bzo.css';
import '../../css/b/bb3g-_4cc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="uboeh8bzo"/><rect class="bb3g-_4cc"/></g>`,
		"fallback": "lucide:ad",
	});
}

export default Component;
