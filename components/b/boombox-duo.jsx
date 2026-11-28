import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x1147acnm.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/c/c2hprkbfn.css';
import '../../css/w/wl8ukgbyz.css';
import '../../css/z/z-pge_rrg.css';
import '../../css/u/ul8tohbtv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="secondary x1147acnm"/><g class="dt0cm9dhy primary"><path class="c2hprkbfn"/><path class="wl8ukgbyz"/><path class="z-pge_rrg"/><path class="ul8tohbtv"/></g>`,
		"fallback": "iconaut:boombox-duo",
	});
}

export default Component;
