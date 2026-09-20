import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/y3-n58svb.css';
import '../../css/c/c55c6gwwk.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="y3-n58svb"/><path class="c55c6gwwk ouiIcon__fillSecondary"/></g>`,
		"fallback": "oui:app-index-pattern",
	});
}

export default Component;
