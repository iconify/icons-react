import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/l/ljl6vmb9x.css';
import '../../css/d/d0h309vkc.css';
import '../../css/t/tlrj0v62m.css';
import '../../css/x/xm56qfbnf.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="ljl6vmb9x"/><path class="d0h309vkc"/><path class="tlrj0v62m"/><path class="xm56qfbnf"/></g>`,
		"fallback": "icon-park:email-fail",
	});
}

export default Component;
