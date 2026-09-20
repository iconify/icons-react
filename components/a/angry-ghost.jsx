import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/e/eyrzruisf.css';
import '../../css/i/i_pdceepo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="eyrzruisf"/><path class="i_pdceepo"/></g>`,
		"fallback": "mynaui:angry-ghost",
	});
}

export default Component;
