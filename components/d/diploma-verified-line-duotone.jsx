import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/w/wbu31ymqo.css';
import '../../css/a/aw_85mb7u.css';
import '../../css/m/mwn-ncj6a.css';
import '../../css/q/qv3q18vvu.css';
import '../../css/a/a0l-fdc8b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="wbu31ymqo"/><path class="aw_85mb7u"/><path class="mwn-ncj6a"/><path class="qv3q18vvu"/><path class="a0l-fdc8b"/></g>`,
		"fallback": "solar:diploma-verified-line-duotone",
	});
}

export default Component;
