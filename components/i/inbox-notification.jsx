import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/q/qihxq122b.css';
import '../../css/x/x66xuvg5w.css';
import '../../css/l/lm2y_hbzh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="qihxq122b"/><path class="x66xuvg5w"/><circle class="lm2y_hbzh"/></g>`,
		"fallback": "mage:inbox-notification",
	});
}

export default Component;
