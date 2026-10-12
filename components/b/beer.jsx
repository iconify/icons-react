import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bjw_jjxvg.css';
import '../../css/k/k8dvft66x.css';
import '../../css/j/jidej3--s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="bjw_jjxvg"/><path class="k8dvft66x"/><path class="jidej3--s"/></g>`,
		"fallback": "andrsrxn:beer",
	});
}

export default Component;
