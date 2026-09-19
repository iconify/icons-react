import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/xebc19bjy.css';
import '../../css/g/gf6s6zlii.css';
import '../../css/y/ypt4qqd3n.css';
import '../../css/f/fb6wotbsm.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="xebc19bjy"/><path class="gf6s6zlii"/><path class="ypt4qqd3n"/><path class="fb6wotbsm"/></g>`,
		"fallback": "healthicons:close-policy-gaps-alt",
	});
}

export default Component;
