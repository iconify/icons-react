import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/f/fyc56sbip.css';
import '../../css/s/ser6vbbjj.css';
import '../../css/b/bf3cxvlkw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="fyc56sbip"/><path class="ser6vbbjj wm-shadow"/><path class="bf3cxvlkw"/></g>`,
		"fallback": "withicons:git-commit-engrave",
	});
}

export default Component;
