import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/unc2embyj.css';
import '../../css/d/dr0ul_4qw.css';
import '../../css/j/jdgi2gcts.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="unc2embyj"><path class="dr0ul_4qw"/><path class="jdgi2gcts"/></g>`,
		"fallback": "lets-icons:basket-duotone-line",
	});
}

export default Component;
