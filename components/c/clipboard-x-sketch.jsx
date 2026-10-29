import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/z/z80o90bnu.css';
import '../../css/c/c7pts9b4m.css';
import '../../css/e/e-pbxlb-r.css';
import '../../css/u/uq6pxgb_j.css';
import '../../css/c/cs2ofc7il.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="z80o90bnu"/><path class="c7pts9b4m wm-k"/><path class="e-pbxlb-r wm-a"/><path class="uq6pxgb_j wm-k"/><path class="cs2ofc7il wm-a"/></g>`,
		"fallback": "withicons:clipboard-x-sketch",
	});
}

export default Component;
