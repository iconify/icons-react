import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qz4l92b3x.css';
import '../../css/t/taq-skbqs.css';
import '../../css/g/gf4z2jg7k.css';
import '../../css/e/ex428htal.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="qz4l92b3x"/><path class="taq-skbqs"/><path class="gf4z2jg7k"/><path class="ex428htal"/></g>`,
		"fallback": "andrsrxn:browser-lightning",
	});
}

export default Component;
