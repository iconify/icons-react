import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sl-e9gbkv.css';
import '../../css/y/y3t2ybb7g.css';
import '../../css/j/jfr3fmb8n.css';
import '../../css/c/c_rf7tboi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="sl-e9gbkv"/><rect transform="matrix(0 -1 .99957 -.02944 15.36 10.01)" class="y3t2ybb7g"/><path class="jfr3fmb8n"/><path class="c_rf7tboi"/></g>`,
		"fallback": "andrsrxn:hair-dryer",
	});
}

export default Component;
