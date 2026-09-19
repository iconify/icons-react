import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/k/ki0xnbcvt.css';
import '../../css/m/md286fbip.css';
import '../../css/k/kn8bd-bng.css';
import '../../css/h/hx2tq71se.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="bi12bsetm"><circle class="ki0xnbcvt"/><g class="md286fbip"><path class="kn8bd-bng"/><path class="hx2tq71se"/></g></g>`,
		"fallback": "cryptocurrency-color:cc",
	});
}

export default Component;
