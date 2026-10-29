import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/d/d5_g3qhba.css';
import '../../css/k/k26wfpbvc.css';
import '../../css/c/c69-1vwtm.css';
import '../../css/l/llg7pdbbo.css';
import '../../css/w/wh0zujbon.css';
import '../../css/a/a25hrzb6t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="d5_g3qhba wm-deco"/><path class="k26wfpbvc wm-deco"/><path class="c69-1vwtm wm-deco"/><path class="llg7pdbbo wm-k"/><path class="wh0zujbon wm-a"/><path class="a25hrzb6t wm-k"/></g>`,
		"fallback": "withicons:flower-blueprint",
	});
}

export default Component;
