import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/g/gt6yogb2w.css';
import '../../css/h/h2qmaxh0e.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="bi12bsetm"><circle class="gt6yogb2w"/><path class="h2qmaxh0e"/></g>`,
		"fallback": "cryptocurrency-color:cenz",
	});
}

export default Component;
