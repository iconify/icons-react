import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yjgf24xcc.css';
import '../../css/t/tnr1r2bpw.css';
import '../../css/k/kpl8omk-w.css';
import '../../css/s/sfk_gc3qx.css';
import '../../css/p/p4cbj11-t.css';

const viewBox = {"width":40,"height":40};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="yjgf24xcc"/><path class="tnr1r2bpw"/><path class="kpl8omk-w"/><path class="sfk_gc3qx"/><path class="p4cbj11-t"/></g>`,
		"fallback": "streamline-stickies-color:drone",
	});
}

export default Component;
