import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/ljn5aubyy.css';
import '../../css/q/q136k_oms.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ljn5aubyy"/><path clip-rule="evenodd" class="q136k_oms"/></g>`,
		"fallback": "majesticons:book-minus",
	});
}

export default Component;
