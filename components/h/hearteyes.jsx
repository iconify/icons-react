import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h32t530tv.css';
import '../../css/n/n9cednr3v.css';
import '../../css/f/faaz46tso.css';
import '../../css/l/ljvb3gb2w.css';
import '../../css/g/gqe6mob9w.css';
import '../../css/u/ush_09bgv.css';
import '../../css/k/koixsibvg.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h32t530tv"/><path class="n9cednr3v"/><path class="faaz46tso"/><path class="ljvb3gb2w"/><path class="gqe6mob9w"/><path class="ush_09bgv"/><path class="koixsibvg"/>`,
		"fallback": "fxemoji:hearteyes",
	});
}

export default Component;
