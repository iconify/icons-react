import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/u/uiabv1bfo.css';
import '../../css/x/x-wib9s9o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="uiabv1bfo"/><path class="x-wib9s9o"/></g>`,
		"fallback": "hugeicons:hierarchy-square-02",
	});
}

export default Component;
