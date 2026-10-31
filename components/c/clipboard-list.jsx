import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/h/hxiasq3pp.css';
import '../../css/v/v_kbgzb8l.css';
import '../../css/j/ja8is2nno.css';
import '../../css/c/cgswracir.css';
import '../../css/u/ueq6etbdt.css';
import '../../css/c/cpwse7bnx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="hxiasq3pp wm-shadow"/><path class="v_kbgzb8l"/><path class="ja8is2nno"/><path class="cgswracir"/><path class="ueq6etbdt"/><path class="cpwse7bnx"/></g>`,
		"fallback": "withicons-retro:clipboard-list",
	});
}

export default Component;
