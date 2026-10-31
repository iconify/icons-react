import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/i/i8fkcybso.css';
import '../../css/n/nqmf4jucg.css';
import '../../css/u/up8qf57js.css';
import '../../css/k/kbhprvbia.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="i8fkcybso wm-shadow"/><path class="nqmf4jucg wm-shadow"/><path class="up8qf57js"/><path class="kbhprvbia"/></g>`,
		"fallback": "withicons-brutal:factory",
	});
}

export default Component;
