import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/l/ljl6vmb9x.css';
import '../../css/x/xm56qfbnf.css';
import '../../css/r/rd1l90nkl.css';
import '../../css/i/ie-pkgbhq.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="ljl6vmb9x"/><path class="xm56qfbnf"/><path class="rd1l90nkl"/><path class="ie-pkgbhq"/></g>`,
		"fallback": "icon-park:email-delect",
	});
}

export default Component;
