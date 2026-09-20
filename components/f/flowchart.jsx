import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/af12zqbol.css';
import '../../css/a/a789ibjgb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="af12zqbol"/><path class="a789ibjgb"/></g>`,
		"fallback": "tdesign:flowchart",
	});
}

export default Component;
