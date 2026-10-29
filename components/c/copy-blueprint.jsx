import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/c/cjgkwhwya.css';
import '../../css/b/bw_7xbbfl.css';
import '../../css/c/cf3uzcrzx.css';
import '../../css/b/bpxha0pxg.css';
import '../../css/b/b5x9xi0bu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="cjgkwhwya wm-deco"/><path class="bw_7xbbfl wm-deco"/><path class="cf3uzcrzx wm-deco"/><path class="bpxha0pxg wm-k"/><path class="b5x9xi0bu wm-a"/></g>`,
		"fallback": "withicons:copy-blueprint",
	});
}

export default Component;
