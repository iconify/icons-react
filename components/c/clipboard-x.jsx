import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/uqsudsbwb.css';
import '../../css/p/p-ergr5en.css';
import '../../css/o/oeyhvroag.css';
import '../../css/f/fpmq3fgfo.css';
import '../../css/w/wbrw7cc1u.css';
import '../../css/b/brmyizp3b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="uqsudsbwb wm-k"/><path class="p-ergr5en wm-k"/><path class="oeyhvroag wm-k"/><path class="fpmq3fgfo wm-k"/><path class="wbrw7cc1u wm-shine"/><path class="brmyizp3b wm-a"/></g>`,
		"fallback": "withicons-anime:clipboard-x",
	});
}

export default Component;
