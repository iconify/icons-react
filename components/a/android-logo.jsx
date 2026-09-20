import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/a/ap26nqnxv.css';
import '../../css/l/lsz6fibgl.css';
import '../../css/a/acqdoh0bi.css';
import '../../css/v/vln_qclhe.css';
import '../../css/z/zbkvzbrvx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="ap26nqnxv"/><path class="lsz6fibgl"/><path class="acqdoh0bi"/><path class="vln_qclhe"/><path class="zbkvzbrvx"/></g>`,
		"fallback": "streamline-freehand-color:android-logo",
	});
}

export default Component;
