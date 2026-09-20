import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/u7jin0b7z.css';
import '../../css/v/vwg43ut4g.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="u7jin0b7z"/><path class="ouiIcon__fillSecondary vwg43ut4g"/></g>`,
		"fallback": "oui:app-devtools",
	});
}

export default Component;
