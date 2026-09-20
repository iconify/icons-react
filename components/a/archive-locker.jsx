import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/lsy3psbqo.css';
import '../../css/y/y96xizbul.css';
import '../../css/d/dm5mnub3m.css';
import '../../css/s/stqnwrr5b.css';
import '../../css/k/klrj55bht.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="lsy3psbqo"/><path class="y96xizbul"/><path class="dm5mnub3m"/><path class="stqnwrr5b"/><path class="klrj55bht"/></g>`,
		"fallback": "streamline-ultimate-color:archive-locker",
	});
}

export default Component;
