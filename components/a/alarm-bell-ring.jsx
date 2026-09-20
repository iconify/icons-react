import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/il6qsobgl.css';
import '../../css/g/gr7uvfbzf.css';
import '../../css/e/ejcqtebwj.css';
import '../../css/x/xezwnd2as.css';
import '../../css/s/sluf72b8a.css';
import '../../css/l/l4fiuobzl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="il6qsobgl"/><path class="gr7uvfbzf"/><path class="ejcqtebwj"/><path class="xezwnd2as"/><path class="sluf72b8a"/><path class="l4fiuobzl"/></g>`,
		"fallback": "streamline-ultimate-color:alarm-bell-ring",
	});
}

export default Component;
