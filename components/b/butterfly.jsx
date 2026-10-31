import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/x/xv27o_e0w.css';
import '../../css/q/qhvdtrqmw.css';
import '../../css/q/q56y233js.css';
import '../../css/g/gpwovhbpc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="xv27o_e0w"/><path class="qhvdtrqmw wm-shine"/><path class="q56y233js wm-k"/><path class="gpwovhbpc wm-a"/></g>`,
		"fallback": "withicons-kawaii:butterfly",
	});
}

export default Component;
