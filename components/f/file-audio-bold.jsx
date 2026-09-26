import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/w80gd_bpg.css';
import '../../css/u/ukd23n-4w.css';
import '../../css/m/m7uww-bhk.css';
import '../../css/c/c73t34bfn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="w80gd_bpg"/><path class="ukd23n-4w"/><path clip-rule="evenodd" class="m7uww-bhk"/><path class="c73t34bfn"/></g>`,
		"fallback": "solar:file-audio-bold",
	});
}

export default Component;
