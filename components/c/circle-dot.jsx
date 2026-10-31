import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/o/ojm0g0b0w.css';
import '../../css/c/cvkvj-pkr.css';
import '../../css/m/mf8c4vo4f.css';
import '../../css/y/yw4fz_b6b.css';
import '../../css/h/huktpebgs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="ojm0g0b0w"/><path class="cvkvj-pkr"/><path class="mf8c4vo4f wm-shine"/><path class="wm-k yw4fz_b6b"/><path class="huktpebgs wm-a"/></g>`,
		"fallback": "withicons-kawaii:circle-dot",
	});
}

export default Component;
