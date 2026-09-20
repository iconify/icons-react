import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wism3vaym.css';
import '../../css/q/qt1tusboa.css';
import '../../css/m/m3x86_3zn.css';
import '../../css/v/vzi9avbag.css';
import '../../css/t/tjivv3bqi.css';
import '../../css/x/xnqrr2gqq.css';
import '../../css/q/qy525jbwx.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wism3vaym"/><path class="qt1tusboa"/><path class="m3x86_3zn"/><path class="vzi9avbag"/><path class="tjivv3bqi"/><path class="xnqrr2gqq"/><path class="qy525jbwx"/>`,
		"fallback": "openmoji:flag-zambia",
	});
}

export default Component;
