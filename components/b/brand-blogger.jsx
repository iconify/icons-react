import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/j/j796webip.css';
import '../../css/i/i5fxy-quo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="j796webip"/><path class="i5fxy-quo"/></g>`,
		"fallback": "tabler:brand-blogger",
	});
}

export default Component;
