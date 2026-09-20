import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/c-4y5cz6s.css';
import '../../css/v/vmiab0baf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="c-4y5cz6s"/><path class="vmiab0baf"/></g>`,
		"fallback": "tdesign:bone",
	});
}

export default Component;
