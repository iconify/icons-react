import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/l/l59i_oblg.css';
import '../../css/o/ofavwbb7u.css';
import '../../css/h/h6026w25h.css';
import '../../css/j/j-pylbk1b.css';
import '../../css/b/bhiwjcb5k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="l59i_oblg wm-shadow"/><path class="ofavwbb7u"/><path class="h6026w25h"/><path class="j-pylbk1b"/><path class="bhiwjcb5k"/></g>`,
		"fallback": "withicons-retro:bell-concierge",
	});
}

export default Component;
