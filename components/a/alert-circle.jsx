import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/at5l-wbup.css';
import '../../css/b/b8h4ybbbd.css';
import '../../css/q/qjf92tb9y.css';
import '../../css/u/uw1lo-x-x.css';
import '../../css/z/zmo4h49ym.css';
import '../../css/z/ze2ps5bam.css';
import '../../css/t/tpl2lf6ja.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="at5l-wbup wm-k"/><path class="b8h4ybbbd wm-deco"/><path class="qjf92tb9y wm-k"/><path class="uw1lo-x-x wm-k"/><path class="wm-shadow zmo4h49ym"/><path class="wm-shine ze2ps5bam"/><path class="tpl2lf6ja wm-shine"/></g>`,
		"fallback": "withicons-valentine:alert-circle",
	});
}

export default Component;
