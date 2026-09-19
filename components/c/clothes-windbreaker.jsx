import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/kb6q_vbqk.css';
import '../../css/w/woqq12bcn.css';
import '../../css/x/xw6lx3wlw.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="kb6q_vbqk"/><path class="woqq12bcn"/><path class="xw6lx3wlw"/></g>`,
		"fallback": "icon-park:clothes-windbreaker",
	});
}

export default Component;
