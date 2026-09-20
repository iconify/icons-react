import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/c/c6-bipb9j.css';
import '../../css/a/ayaekoj_p.css';
import '../../css/a/alu6i0_jj.css';
import '../../css/q/q5lasnb7b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="c6-bipb9j"/><path class="ayaekoj_p"/><path class="alu6i0_jj"/><path class="q5lasnb7b"/></g>`,
		"fallback": "solar:book-line-duotone",
	});
}

export default Component;
