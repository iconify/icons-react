import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/f/fva-rxset.css';
import '../../css/d/d9-pbkc9y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="fva-rxset"/><path class="d9-pbkc9y"/></g>`,
		"fallback": "hugeicons:doc-01",
	});
}

export default Component;
