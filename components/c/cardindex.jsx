import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aiaey3pxg.css';
import '../../css/l/lqhx45b6l.css';
import '../../css/u/ummdzyb2w.css';
import '../../css/t/txbnpjbbr.css';
import '../../css/z/zbhnsnbal.css';
import '../../css/e/eg9vpb7jp.css';
import '../../css/h/hpibg1gjp.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aiaey3pxg"/><path class="lqhx45b6l"/><path class="ummdzyb2w"/><path class="txbnpjbbr"/><path class="zbhnsnbal"/><path class="eg9vpb7jp"/><path class="hpibg1gjp"/>`,
		"fallback": "fxemoji:cardindex",
	});
}

export default Component;
