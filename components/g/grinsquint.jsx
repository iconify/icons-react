import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h32t530tv.css';
import '../../css/a/ac4_vbbiy.css';
import '../../css/t/tp-ql8b0x.css';
import '../../css/l/lh0zjccjf.css';
import '../../css/n/n9cednr3v.css';
import '../../css/j/juvrlxbsj.css';
import '../../css/s/stvs53win.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h32t530tv"/><path class="ac4_vbbiy"/><path class="tp-ql8b0x"/><path class="lh0zjccjf"/><path class="n9cednr3v"/><path class="juvrlxbsj"/><path class="stvs53win"/>`,
		"fallback": "fxemoji:grinsquint",
	});
}

export default Component;
