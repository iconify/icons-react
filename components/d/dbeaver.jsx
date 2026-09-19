import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m-1znsb_i.css';
import '../../css/w/w_-tejb9n.css';
import '../../css/o/o4i6_qebr.css';
import '../../css/w/wrzyrqwoe.css';
import '../../css/f/fxiro_i8r.css';
import '../../css/g/g6l4ysblj.css';
import '../../css/m/mv0lp3bsf.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m-1znsb_i"/><path class="w_-tejb9n"/><path class="o4i6_qebr"/><path class="wrzyrqwoe"/><path class="fxiro_i8r"/><path class="g6l4ysblj"/><path class="mv0lp3bsf"/>`,
		"fallback": "devicon:dbeaver",
	});
}

export default Component;
