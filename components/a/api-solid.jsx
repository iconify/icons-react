import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/u/u2w5ytbag.css';
import '../../css/j/jr40zrbaz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="u2w5ytbag"/><path class="jr40zrbaz wm-a"/></g>`,
		"fallback": "withicons:api-solid",
	});
}

export default Component;
