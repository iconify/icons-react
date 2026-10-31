import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/z/zc3svkblt.css';
import '../../css/x/x7lx5ibwh.css';
import '../../css/t/tig3l-bhv.css';
import '../../css/e/ear1j4bob.css';
import '../../css/e/e5v4bybmd.css';
import '../../css/w/wkqwx3fep.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="wm-shadow zc3svkblt"/><path class="x7lx5ibwh"/><path class="tig3l-bhv"/><path class="ear1j4bob"/><path class="e5v4bybmd"/><path class="wkqwx3fep"/></g>`,
		"fallback": "withicons-retro:badge-dollar-sign",
	});
}

export default Component;
