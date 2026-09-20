import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/j70ov_g8p.css';
import '../../css/e/e1kag6bsx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="j70ov_g8p"/><path class="e1kag6bsx"/></g>`,
		"fallback": "tdesign:flag-4",
	});
}

export default Component;
