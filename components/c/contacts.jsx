import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jqfsawfmi.css';
import '../../css/z/z6kmhlb8x.css';
import '../../css/k/kpuhilb-a.css';
import '../../css/q/qs52gjbsc.css';
import '../../css/u/uu_jgn35i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="jqfsawfmi"/><circle class="z6kmhlb8x"/><path class="kpuhilb-a"/><path class="qs52gjbsc"/><path class="uu_jgn35i"/></g>`,
		"fallback": "andrsrxn:contacts",
	});
}

export default Component;
