import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/t/ta31eq_6z.css';
import '../../css/t/tyki2lbul.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="ta31eq_6z"/><path class="tyki2lbul"/></g>`,
		"fallback": "keyline-icons:bar-chart-two-tone",
	});
}

export default Component;
