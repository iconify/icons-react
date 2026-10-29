import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/d/dhvk_0bdk.css';
import '../../css/x/xgo30jsvb.css';
import '../../css/w/wn6q_obzm.css';
import '../../css/y/yyyu1pbcf.css';
import '../../css/w/wdofi-bnf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="dhvk_0bdk wm-deco"/><path class="wm-deco xgo30jsvb"/><path class="wm-deco wn6q_obzm"/><path class="yyyu1pbcf"/><path class="wdofi-bnf"/></g>`,
		"fallback": "withicons:clover-blueprint",
	});
}

export default Component;
