import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xn5eo9bqs.css';
import '../../css/j/jgc27hbfj.css';
import '../../css/w/ww384ddvr.css';
import '../../css/y/ywahhcbin.css';
import '../../css/t/t0qzfnouu.css';
import '../../css/e/erkg_gaei.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xn5eo9bqs"><path class="jgc27hbfj"/><path class="ww384ddvr"/><path class="ywahhcbin"/><path class="t0qzfnouu"/><path class="erkg_gaei"/></g>`,
		"fallback": "matita:circle-fading-arrow-up",
	});
}

export default Component;
