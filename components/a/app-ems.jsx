import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/bc1nk3b5l.css';
import '../../css/x/xjn473_cv.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="bc1nk3b5l ouiIcon__fillSecondary"/><path class="xjn473_cv"/></g>`,
		"fallback": "oui:app-ems",
	});
}

export default Component;
